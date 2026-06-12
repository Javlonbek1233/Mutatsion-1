'use client';

import React from 'react';
import { Country, LanguageCode } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { formatNumber, formatArea } from '@/utils/formatters';
import FavoriteButton from './FavoriteButton';
import BorderCountry from './BorderCountry';
import StatCard from './StatCard';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Map, 
  Users, 
  Layers, 
  Globe2, 
  Languages, 
  Coins, 
  Clock, 
  Compass,
  Building,
  Maximize2
} from 'lucide-react';
import { motion } from 'motion/react';

interface CountryDetailClientProps {
  country: Country;
  borderCountries: { cca3: string; nameCommon: string; flag: string }[];
}

export default function CountryDetailClient({ country, borderCountries }: CountryDetailClientProps) {
  const { language, setLanguage, t } = useLanguage();
  const { 
    cca3, 
    name, 
    flags, 
    population, 
    region, 
    subregion, 
    capital, 
    area, 
    languages, 
    currencies, 
    timezones, 
    continents,
    maps
  } = country;

  // Handle dynamic native name parsing safely
  const nativeNameParsed = name.nativeName 
    ? Object.values(name.nativeName)[0]?.common || name.common
    : name.common;

  // Formatting strings safely
  const capitalName = capital && capital.length > 0 ? capital.join(', ') : 'N/A';
  const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
  const currencyList = currencies 
    ? Object.values(currencies).map(c => `${c.name} (${c.symbol || ''})`).join(', ')
    : 'N/A';
  const timezonesList = timezones ? timezones.slice(0, 3).join(', ') : 'N/A';
  const continentName = continents ? continents.join(', ') : region;

  return (
    <div className="space-y-8" id={`detail-view-${cca3.toLowerCase()}`}>
      {/* Back button & Control bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-bold text-slate-600 hover:text-indigo-600 cursor-pointer active:scale-97 select-none transition-colors"
          id="btn-back-home"
        >
          <ArrowLeft className="w-5 h-5 bg-white shadow-xs border border-slate-200 p-1.5 rounded-full" />
          <span>{t('backHome')}</span>
        </Link>

        {/* Dynamic language switcher on details page matching main header styling */}
        <div className="flex border border-slate-200 rounded-lg overflow-hidden text-xs bg-white" id="detail-language-switcher">
          {(['uz', 'en', 'ru'] as const).map((lang, idx) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1.5 font-bold transition-all cursor-pointer uppercase ${
                idx < 2 ? 'border-r border-slate-200' : ''
              } ${
                language === lang
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-400 hover:text-slate-600'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Huge Flag & Map & Follow action */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-55"
            id="detail-flag-wrapper"
          >
            <Image
              src={flags.svg || flags.png}
              alt={flags.alt || `${name.common} Flag`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Quick Stats Summary / Buttons Under The Flag */}
          <div className="flex flex-col gap-3">
            <FavoriteButton cca3={cca3} variant="full" className="w-full" />
            
            {maps?.googleMaps && (
              <a
                href={maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-sans font-bold rounded-xl transition-all shadow-sm cursor-pointer select-none active:scale-97 hover:shadow-md"
                id="maps-extern-link"
              >
                <Map className="w-5 h-5 text-indigo-400" />
                <span>{t('mapLink')}</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Key Details & Structured bento boxes */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <h1 className="font-sans font-black text-3xl md:text-4xl text-slate-900 tracking-tight uppercase">
              {name.common}
            </h1>
            <p className="text-sm font-sans font-medium text-slate-500 mt-1 flex items-center gap-2">
              <span className="font-bold text-slate-400">Official Name:</span> <span className="text-slate-700">{name.official}</span>
            </p>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard 
              title={t('population')} 
              value={formatNumber(population)} 
              icon={<Users className="w-5 h-5" />} 
              color="indigo"
            />
            <StatCard 
              title={t('area_label')} 
              value={formatArea(area)} 
              icon={<Maximize2 className="w-5 h-5" />} 
              color="blue"
            />
            <StatCard 
              title={t('region')} 
              value={`${region} (${subregion || 'N/A'})`} 
              icon={<Globe2 className="w-5 h-5" />} 
              color="purple"
            />
            <StatCard 
              title={t('capital_label')} 
              value={capitalName} 
              icon={<Building className="w-5 h-5" />} 
              color="amber"
            />
          </div>

          {/* Additional details list box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-sans font-bold text-base text-slate-800 border-b border-slate-150 pb-2 uppercase tracking-wide text-xs">
              Info Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-sans">
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs font-bold uppercase">{t('nativeName')}</span>
                  <span className="text-slate-800 font-bold mt-0.5">{nativeNameParsed}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs font-bold uppercase">{t('subregion')}</span>
                  <span className="text-slate-800 font-bold mt-0.5">{subregion || 'N/A'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs font-bold uppercase">{t('timezones')}</span>
                  <span className="text-slate-800 font-bold mt-0.5 line-clamp-2" title={timezonesList}>
                    <Clock className="w-3.5 h-3.5 inline-block mr-1 text-slate-400" />
                    {timezonesList}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs font-bold uppercase">{t('languages')}</span>
                  <span className="text-slate-800 font-bold mt-0.5">
                    <Languages className="w-3.5 h-3.5 inline-block mr-1 text-slate-400" />
                    {languageList}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs font-bold uppercase">{t('currencies')}</span>
                  <span className="text-slate-800 font-bold mt-0.5">
                    <Coins className="w-3.5 h-3.5 inline-block mr-1 text-slate-400" />
                    {currencyList}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-xs font-bold uppercase">Continent</span>
                  <span className="text-slate-800 font-bold mt-0.5">{continentName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Borders Section */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4" id="country-borders-section">
            <h3 className="font-sans font-bold text-base text-slate-800 border-b border-slate-150 pb-2 flex items-center gap-2 uppercase tracking-wide text-xs">
              <Compass className="w-4 h-4 text-indigo-500" />
              <span>{t('borders')}</span>
            </h3>

            {borderCountries && borderCountries.length > 0 ? (
              <div className="flex flex-wrap gap-2.5 pt-1">
                {borderCountries.map((b) => (
                  <BorderCountry
                    key={b.cca3}
                    cca3={b.cca3}
                    nameCommon={b.nameCommon}
                    flag={b.flag}
                  />
                ))}
              </div>
            ) : (
              <p className="font-sans text-sm text-slate-600 italic">
                {t('noBorders')}
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
