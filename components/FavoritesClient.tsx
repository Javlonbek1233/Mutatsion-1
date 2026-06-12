'use client';

import React, { useMemo } from 'react';
import { Country } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { useFavorites } from '@/hooks/useFavorites';
import CountryCard from './CountryCard';
import { ArrowLeft, Star, HeartCrack, Globe2 } from 'lucide-react';
import Link from 'next/link';

interface FavoritesClientProps {
  allCountries: Country[];
}

export default function FavoritesClient({ allCountries }: FavoritesClientProps) {
  const { language, setLanguage, t } = useLanguage();
  const { favorites, isLoaded } = useFavorites();

  const favoriteCountries = useMemo(() => {
    if (!favorites || favorites.length === 0) return [];
    return allCountries.filter((c) => favorites.includes(c.cca3.toUpperCase()));
  }, [allCountries, favorites]);

  return (
    <div className="space-y-8" id="favorites-page-client">
      {/* Header toolbars */}
      <header className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-center" id="favorites-toolbar">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-bold text-slate-600 hover:text-indigo-600 cursor-pointer active:scale-97 select-none transition-colors"
          id="btn-back-home"
        >
          <ArrowLeft className="w-5 h-5 bg-slate-50 border border-slate-200 p-1.5 rounded-full" />
          <span>{t('backHome')}</span>
        </Link>

        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-indigo-600 fill-indigo-600 animate-pulse" />
          <h1 className="font-sans font-black text-xl md:text-2xl text-slate-800 tracking-tight uppercase">
            {t('favorites')} ({favoriteCountries.length})
          </h1>
        </div>

        {/* Translation selector widget matching design spec */}
        <div className="flex border border-slate-200 rounded-lg overflow-hidden text-xs bg-white" id="favorites-language-group">
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
      </header>

      {/* Grid */}
      {!isLoaded ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-video w-full bg-slate-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : favoriteCountries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in" id="favorites-grid">
          {favoriteCountries.map((country) => (
            <div key={country.cca3} className="h-full">
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl shadow-xs" id="favorites-empty-state">
          <HeartCrack className="w-12 h-12 text-rose-300 mx-auto mb-4 animate-bounce" />
          <h3 className="text-lg font-sans font-bold text-slate-700">No favorites selected.</h3>
          <p className="text-slate-500 text-sm mt-1 mb-8 max-w-sm mx-auto">
            {t('noFavorites')}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-sm rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Globe2 className="w-4 h-4" />
            <span>Discover Countries</span>
          </Link>
        </div>
      )}
    </div>
  );
}
