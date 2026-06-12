import { Country } from '@/types';

export const FALLBACK_COUNTRIES: Country[] = [
  {
    cca3: 'UZB',
    name: {
      common: 'Uzbekistan',
      official: 'Republic of Uzbekistan',
      nativeName: {
        uzb: {
          official: "O'zbekiston Respublikasi",
          common: "O'zbekiston"
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/uz.png',
      svg: 'https://flagcdn.com/uz.svg',
      alt: 'The flag of Uzbekistan is composed of three equal horizontal bands of blue, white and green, with each band separated by a thin red stripe. In the blue band, there is a white crescent moon and twelve five-pointed stars.'
    },
    population: 36024946,
    region: 'Asia',
    subregion: 'Central Asia',
    capital: ['Tashkent'],
    tld: ['.uz'],
    currencies: {
      UZS: { name: 'Uzbekistani soʻm', symbol: 'soʻm' }
    },
    languages: {
      uzb: 'Uzbek',
      rus: 'Russian'
    },
    borders: ['AFG', 'KAZ', 'KGZ', 'TJK', 'TKM'],
    maps: {
      googleMaps: 'https://goo.gl/maps/Srg7uXJnhihS7N8d7'
    },
    area: 447400,
    timezones: ['UTC+05:00'],
    continents: ['Asia']
  },
  {
    cca3: 'USA',
    name: {
      common: 'United States',
      official: 'United States of America',
      nativeName: {
        eng: {
          official: 'United States of America',
          common: 'United States'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/us.png',
      svg: 'https://flagcdn.com/us.svg',
      alt: 'The flag of the United States of America is composed of thirteen equal horizontal stripes of red alternating with white and a blue rectangle in the canton, which contains fifty small white five-pointed stars.'
    },
    population: 331449281,
    region: 'Americas',
    subregion: 'North America',
    capital: ['Washington, D.C.'],
    tld: ['.us'],
    currencies: {
      USD: { name: 'United States dollar', symbol: '$' }
    },
    languages: {
      eng: 'English'
    },
    borders: ['CAN', 'MEX'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8PR9g2ZUk7CgCCn8'
    },
    area: 9833517,
    timezones: ['UTC-05:00', 'UTC-06:00', 'UTC-07:00', 'UTC-08:00'],
    continents: ['North America']
  },
  {
    cca3: 'JPN',
    name: {
      common: 'Japan',
      official: 'Japan',
      nativeName: {
        jpn: {
          official: '日本国',
          common: '日本'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/jp.png',
      svg: 'https://flagcdn.com/jp.svg',
      alt: 'The flag of Japan features a red circle, representing the sun, in the center of a white rectangular field.'
    },
    population: 125836021,
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: ['Tokyo'],
    tld: ['.jp'],
    currencies: {
      JPY: { name: 'Japanese yen', symbol: '¥' }
    },
    languages: {
      jpn: 'Japanese'
    },
    borders: [],
    maps: {
      googleMaps: 'https://goo.gl/maps/z7Y7Be1CRvCOec6C9'
    },
    area: 377975,
    timezones: ['UTC+09:00'],
    continents: ['Asia']
  },
  {
    cca3: 'DEU',
    name: {
      common: 'Germany',
      official: 'Federal Republic of Germany',
      nativeName: {
        deu: {
          official: 'Bundesrepublik Deutschland',
          common: 'Deutschland'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/de.png',
      svg: 'https://flagcdn.com/de.svg',
      alt: 'The flag of Germany is composed of three equal horizontal bands of black, red and gold.'
    },
    population: 83240525,
    region: 'Europe',
    subregion: 'Western Europe',
    capital: ['Berlin'],
    tld: ['.de'],
    currencies: {
      EUR: { name: 'Euro', symbol: '€' }
    },
    languages: {
      deu: 'German'
    },
    borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b78t9b0N6C9bCeC9a'
    },
    area: 357114,
    timezones: ['UTC+01:00'],
    continents: ['Europe']
  },
  {
    cca3: 'FRA',
    name: {
      common: 'France',
      official: 'French Republic',
      nativeName: {
        fra: {
          official: 'République française',
          common: 'France'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/fr.png',
      svg: 'https://flagcdn.com/fr.svg',
      alt: 'The flag of France is a tricolor composed of three vertical bands of blue, white and red.'
    },
    population: 67391582,
    region: 'Europe',
    subregion: 'Western Europe',
    capital: ['Paris'],
    tld: ['.fr'],
    currencies: {
      EUR: { name: 'Euro', symbol: '€' }
    },
    languages: {
      fra: 'French'
    },
    borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b99X9C8N6C9ACEca'
    },
    area: 551695,
    timezones: ['UTC+01:00'],
    continents: ['Europe']
  },
  {
    cca3: 'BRA',
    name: {
      common: 'Brazil',
      official: 'Federative Republic of Brazil',
      nativeName: {
        por: {
          official: 'República Federativa do Brasil',
          common: 'Brasil'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/br.png',
      svg: 'https://flagcdn.com/br.svg',
      alt: 'The flag of Brazil has a green field centering a yellow rhombus containing a blue disc with stars and a banner with the motto "Ordem e Progresso".'
    },
    population: 212559417,
    region: 'Americas',
    subregion: 'South America',
    capital: ['Brasília'],
    tld: ['.br'],
    currencies: {
      BRL: { name: 'Brazilian real', symbol: 'R$' }
    },
    languages: {
      por: 'Portuguese'
    },
    borders: ['ARG', 'BOL', 'COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8Y7Be1CRvCOeca9a'
    },
    area: 8515767,
    timezones: ['UTC-03:00'],
    continents: ['South America']
  },
  {
    cca3: 'AUS',
    name: {
      common: 'Australia',
      official: 'Commonwealth of Australia',
      nativeName: {
        eng: {
          official: 'Commonwealth of Australia',
          common: 'Australia'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/au.png',
      svg: 'https://flagcdn.com/au.svg',
      alt: 'The flag of Australia features the Union Jack in the canton, a large seven-pointed star in the lower hoist, and five white stars representing the Southern Cross.'
    },
    population: 25687041,
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: ['Canberra'],
    tld: ['.au'],
    currencies: {
      AUD: { name: 'Australian dollar', symbol: '$' }
    },
    languages: {
      eng: 'English'
    },
    borders: [],
    maps: {
      googleMaps: 'https://goo.gl/maps/h8Y7Be1CRvCOeca2a'
    },
    area: 7692024,
    timezones: ['UTC+10:00'],
    continents: ['Oceania']
  },
  {
    cca3: 'EGY',
    name: {
      common: 'Egypt',
      official: 'Arab Republic of Egypt',
      nativeName: {
        ara: {
          official: 'جمهورية مصر العربية',
          common: 'مصر'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/eg.png',
      svg: 'https://flagcdn.com/eg.svg',
      alt: 'The flag of Egypt features three equal horizontal bands of red, white and black, with the golden Eagle of Saladin in the center of the white band.'
    },
    population: 102334404,
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: ['Cairo'],
    tld: ['.eg'],
    currencies: {
      EGP: { name: 'Egyptian pound', symbol: 'E£' }
    },
    languages: {
      ara: 'Arabic'
    },
    borders: ['ISR', 'LBY', 'SDN'],
    maps: {
      googleMaps: 'https://goo.gl/maps/m8Y7Be1CRvCOeca7a'
    },
    area: 1002450,
    timezones: ['UTC+02:00'],
    continents: ['Africa']
  },
  {
    cca3: 'CAN',
    name: {
      common: 'Canada',
      official: 'Canada',
      nativeName: {
        eng: {
          official: 'Canada',
          common: 'Canada'
        },
        fra: {
          official: 'Canada',
          common: 'Canada'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/ca.png',
      svg: 'https://flagcdn.com/ca.svg',
      alt: 'The flag of Canada is a red flag featuring a white square in its center, which contains a stylized 11-pointed red maple leaf.'
    },
    population: 38005238,
    region: 'Americas',
    subregion: 'North America',
    capital: ['Ottawa'],
    tld: ['.ca'],
    currencies: {
      CAD: { name: 'Canadian dollar', symbol: '$' }
    },
    languages: {
      eng: 'English',
      fra: 'French'
    },
    borders: ['USA'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8Y7Be1CRvCOeca1a'
    },
    area: 9984670,
    timezones: ['UTC-05:00'],
    continents: ['North America']
  },
  {
    cca3: 'IND',
    name: {
      common: 'India',
      official: 'Republic of India',
      nativeName: {
        hin: {
          official: 'भारत गणराज्य',
          common: 'भारत'
        },
        eng: {
          official: 'Republic of India',
          common: 'India'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/in.png',
      svg: 'https://flagcdn.com/in.svg',
      alt: 'The flag of India is a horizontal tricolor of saffron, white, and green with a 24-spoke navy blue wheel (Ashoka Chakra) in the center of the white stripe.'
    },
    population: 1380004385,
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: ['New Delhi'],
    tld: ['.in'],
    currencies: {
      INR: { name: 'Indian rupee', symbol: '₹' }
    },
    languages: {
      hin: 'Hindi',
      eng: 'English'
    },
    borders: ['BGD', 'BTN', 'CHN', 'MMR', 'NPL', 'PAK'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8Y7Be1CRvCOeca4a'
    },
    area: 3287590,
    timezones: ['UTC+05:30'],
    continents: ['Asia']
  },
  {
    cca3: 'ISL',
    name: {
      common: 'Iceland',
      official: 'Iceland',
      nativeName: {
        isl: {
          official: 'Ísland',
          common: 'Ísland'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/is.png',
      svg: 'https://flagcdn.com/is.svg',
      alt: 'The flag of Iceland features a blue field with a red cross outlined in white extending to the edges.'
    },
    population: 366425,
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: ['Reykjavík'],
    tld: ['.is'],
    currencies: {
      ISK: { name: 'Icelandic króna', symbol: 'kr' }
    },
    languages: {
      isl: 'Icelandic'
    },
    borders: [],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8Y7Be1CRvCOeca3a'
    },
    area: 103000,
    timezones: ['UTC+00:00'],
    continents: ['Europe']
  },
  {
    cca3: 'ZAF',
    name: {
      common: 'South Africa',
      official: 'Republic of South Africa',
      nativeName: {
        afr: { official: 'Republiek van Suid-Afrika', common: 'Suid-Afrika' },
        eng: { official: 'Republic of South Africa', common: 'South Africa' }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/za.png',
      svg: 'https://flagcdn.com/za.svg',
      alt: 'The flag of South Africa consists of two horizontal bands of red and blue, with a black isosceles triangle at the hoist side and a green Y shadow.'
    },
    population: 59308690,
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: ['Pretoria'],
    tld: ['.za'],
    currencies: {
      ZAR: { name: 'South African rand', symbol: 'R' }
    },
    languages: {
      afr: 'Afrikaans',
      eng: 'English',
      nbl: 'Southern Ndebele'
    },
    borders: ['BWA', 'LSO', 'MOZ', 'NAM', 'SWZ', 'ZWE'],
    maps: {
      googleMaps: 'https://goo.gl/maps/k8Y7Be1CRvCOeca8a'
    },
    area: 1221037,
    timezones: ['UTC+02:00'],
    continents: ['Africa']
  },
  {
    cca3: 'KOR',
    name: {
      common: 'South Korea',
      official: 'Republic of Korea',
      nativeName: {
        kor: {
          official: '대한민국',
          common: '대한민국'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/kr.png',
      svg: 'https://flagcdn.com/kr.svg',
      alt: 'The flag of South Korea is white in the background with a red and blue emblem in the center, and four black trigrams in the corners.'
    },
    population: 51780579,
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: ['Seoul'],
    tld: ['.kr'],
    currencies: {
      KRW: { name: 'South Korean won', symbol: '₩' }
    },
    languages: {
      kor: 'Korean'
    },
    borders: ['PRK'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8Y7Be1CRvCOeca5a'
    },
    area: 100210,
    timezones: ['UTC+09:00'],
    continents: ['Asia']
  },
  {
    cca3: 'ESP',
    name: {
      common: 'Spain',
      official: 'Kingdom of Spain',
      nativeName: {
        spa: {
          official: 'Reino de España',
          common: 'España'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/es.png',
      svg: 'https://flagcdn.com/es.svg',
      alt: 'The flag of Spain features three horizontal bands of red, yellow and red, with the yellow band being twice the height of the red bands and containing the Spanish coat of arms near the hoist side.'
    },
    population: 47351595,
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: ['Madrid'],
    tld: ['.es'],
    currencies: {
      EUR: { name: 'Euro', symbol: '€' }
    },
    languages: {
      spa: 'Spanish'
    },
    borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8Y7Be1CRvCOeca2e'
    },
    area: 505992,
    timezones: ['UTC+01:00'],
    continents: ['Europe']
  },
  {
    cca3: 'ITA',
    name: {
      common: 'Italy',
      official: 'Italian Republic',
      nativeName: {
        ita: {
          official: 'Repubblica Italiana',
          common: 'Italia'
        }
      }
    },
    flags: {
      png: 'https://flagcdn.com/w320/it.png',
      svg: 'https://flagcdn.com/it.svg',
      alt: 'The flag of Italy is a vertical tricolor consisting of active green, white and red.'
    },
    population: 59554023,
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: ['Rome'],
    tld: ['.it'],
    currencies: {
      EUR: { name: 'Euro', symbol: '€' }
    },
    languages: {
      ita: 'Italian'
    },
    borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT'],
    maps: {
      googleMaps: 'https://goo.gl/maps/b8Y7Be1CRvCOeca5i'
    },
    area: 301340,
    timezones: ['UTC+01:00'],
    continents: ['Europe']
  }
];
