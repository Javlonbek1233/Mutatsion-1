import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCountryByCca3, getBorderCountries } from '@/lib/api';
import CountryDetailClient from '@/components/CountryDetailClient';

interface CountryPageProps {
  params: Promise<{ cca3: string }>;
}

/**
 * Generates dynamic SEO metadata for each country page
 */
export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { cca3 } = await params;
  const country = await getCountryByCca3(cca3);

  if (!country) {
    return {
      title: 'Country Not Found | WorldExplorer',
    };
  }

  const capitalName = country.capital && country.capital.length > 0 ? country.capital[0] : 'N/A';

  return {
    title: `${country.name.common} — Capital: ${capitalName} | WorldExplorer`,
    description: `Discover population list, currencies, maps, regions, and border countries of ${country.name.common} (${country.cca3}).`,
    openGraph: {
      images: [country.flags.png],
    },
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { cca3 } = await params;
  
  // Resolve server side fetch
  const country = await getCountryByCca3(cca3);

  if (!country) {
    notFound();
  }

  // Fetch sibling borders details
  const borderCountries = await getBorderCountries(country.borders || []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <CountryDetailClient country={country} borderCountries={borderCountries} />
    </main>
  );
}
