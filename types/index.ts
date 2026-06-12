export interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol?: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  area?: number;
  latlng?: number[];
  timezones?: string[];
  continents?: string[];
}

export type LanguageCode = 'en' | 'uz' | 'ru';

export interface TranslationDict {
  appName: string;
  tagline: string;
  searchPlaceholder: string;
  allRegions: string;
  region: string;
  population: string;
  capital_label: string;
  favorites: string;
  noFavorites: string;
  addFavorite: string;
  removeFavorite: string;
  backHome: string;
  sortBy: string;
  sortNameAsc: string;
  sortNameDesc: string;
  sortPopAsc: string;
  sortPopDesc: string;
  sortAreaAsc: string;
  sortAreaDesc: string;
  subregion: string;
  languages: string;
  currencies: string;
  area_label: string;
  borders: string;
  noBorders: string;
  mapLink: string;
  errorLoading: string;
  tryAgain: string;
  loading: string;
  countriesCount: string;
  timezones: string;
  nativeName: string;
}

export type Translations = Record<LanguageCode, TranslationDict>;
