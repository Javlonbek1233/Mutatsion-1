import { Country } from '@/types';
import { FALLBACK_COUNTRIES } from './fallbackData';

const BASE_URL = 'https://restcountries.com/v3.1';

/**
 * Fetches all countries from the REST Countries API
 */
export async function getAllCountries(): Promise<Country[]> {
  try {
    const res = await fetch(`${BASE_URL}/all`, {
      next: { revalidate: 3600 }, // Cache countries and revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch countries: ${res.statusText}`);
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      throw new Error('API response is not an array');
    }
    return data;
  } catch (error) {
    console.warn('Error fetching all countries, using fallback data instead:', error);
    return FALLBACK_COUNTRIES;
  }
}

/**
 * Fetches single country details by its 3-character alpha code (cca3)
 */
export async function getCountryByCca3(cca3: string): Promise<Country | null> {
  const codeUpper = cca3.toUpperCase();
  try {
    const res = await fetch(`${BASE_URL}/alpha/${cca3.toLowerCase()}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      if (res.status === 404) {
        // Fallback check
        const fbCountry = FALLBACK_COUNTRIES.find(c => c.cca3 === codeUpper);
        if (fbCountry) return fbCountry;
        return null;
      }
      throw new Error(`Failed to fetch country ${cca3}: ${res.statusText}`);
    }

    const data = await res.json();
    const parsedData = Array.isArray(data) ? data[0] : (data?.cca3 === codeUpper ? data : null);
    if (!parsedData) {
      const fbCountry = FALLBACK_COUNTRIES.find(c => c.cca3 === codeUpper);
      if (fbCountry) return fbCountry;
    }
    return parsedData;
  } catch (error) {
    console.warn(`Error fetching country ${cca3}, using fallback data instead:`, error);
    const fbCountry = FALLBACK_COUNTRIES.find(c => c.cca3 === codeUpper);
    return fbCountry || null;
  }
}

/**
 * Fetches a list of border countries with abbreviated details
 */
export async function getBorderCountries(borders: string[]): Promise<{ cca3: string; nameCommon: string; flag: string }[]> {
  if (!borders || borders.length === 0) return [];
  
  try {
    const codes = borders.join(',').toLowerCase();
    const res = await fetch(`${BASE_URL}/alpha?codes=${codes}&fields=cca3,name,flags`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch border countries: ${res.statusText}`);
    }

    const data = await res.json();
    if (Array.isArray(data)) {
      return data.map((item: any) => ({
        cca3: item.cca3,
        nameCommon: item.name?.common || item.nameCommon || item.cca3,
        flag: item.flags?.svg || item.flags?.png || '',
      }));
    } else if (data && typeof data === 'object') {
      // If it's a single country object not in an array
      const items = [data];
      return items.map((item: any) => ({
        cca3: item.cca3,
        nameCommon: item.name?.common || item.nameCommon || item.cca3,
        flag: item.flags?.svg || item.flags?.png || '',
      }));
    }
    throw new Error('Borders response structure is unsupported');
  } catch (error) {
    console.warn('Error fetching border countries, using fallback lookup:', error);
    // Find matching borders from our fallback countries list
    const results: { cca3: string; nameCommon: string; flag: string }[] = [];
    for (const bCode of borders) {
      const match = FALLBACK_COUNTRIES.find(c => c.cca3 === bCode.toUpperCase());
      if (match) {
        results.push({
          cca3: match.cca3,
          nameCommon: match.name.common,
          flag: match.flags.svg || match.flags.png,
        });
      } else {
        // Safe placeholder
        results.push({
          cca3: bCode,
          nameCommon: bCode,
          flag: `https://flagcdn.com/${bCode.slice(0, 2).toLowerCase()}.svg`,
        });
      }
    }
    return results;
  }
}
