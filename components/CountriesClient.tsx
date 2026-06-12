'use client';

import React, { useState, useMemo } from 'react';
import { Country } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { useFavorites } from '@/hooks/useFavorites';
import SearchBar from './SearchBar';
import RegionFilter from './RegionFilter';
import SortDropdown from './SortDropdown';
import CountryCard from './CountryCard';
import { Star, Globe, RefreshCcw, Compass } from 'lucide-react';
import Link from 'next/link';

interface CountriesClientProps {
  initialCountries: Country[];
}

export default function CountriesClient({ initialCountries }: CountriesClientProps) {
  const { language, setLanguage, t } = useLanguage();
  const { favorites } = useFavorites();

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter and sort countries
  const filteredAndSortedCountries = useMemo(() => {
    let result = Array.isArray(initialCountries) ? [...initialCountries] : [];

    // Filter by search
    if (search.trim()) {
      const query = search.toLowerCase().trim();
      result = result.filter((c) => {
        const matchesName = c.name?.common?.toLowerCase().includes(query) || 
                            c.name?.official?.toLowerCase().includes(query);
        const matchesCapital = c.capital && c.capital.some(cap => cap.toLowerCase().includes(query));
        const matchesRegion = c.region?.toLowerCase().includes(query);
        return matchesName || matchesCapital || matchesRegion;
      });
    }

    // Filter by region
    if (region) {
      result = result.filter((c) => c.region === region);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return (a.name?.common || '').localeCompare(b.name?.common || '');
        case 'name-desc':
          return (b.name?.common || '').localeCompare(a.name?.common || '');
        case 'pop-desc':
          return (b.population || 0) - (a.population || 0);
        case 'pop-asc':
          return (a.population || 0) - (b.population || 0);
        case 'area-desc':
          return (b.area || 0) - (a.area || 0);
        case 'area-asc':
          return (a.area || 0) - (b.area || 0);
        default:
          return 0;
      }
    });

    return result;
  }, [initialCountries, search, region, sortBy]);

  // Paginate visible items
  const visibleCountries = useMemo(() => {
    return filteredAndSortedCountries.slice(0, visibleCount);
  }, [filteredAndSortedCountries, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const handleResetFilters = () => {
    setSearch('');
    setRegion('');
    setSortBy('name-asc');
    setVisibleCount(12);
  };

  return (
    <div className="w-full space-y-8" id="countries-explorer-client">
      {/* Dynamic Header & Toolbar */}
      <header className="h-20 sm:h-16 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 bg-white border-b border-slate-200 shrink-0 gap-4 sm:gap-0 shadow-xs" id="explorer-header">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm">
            <Compass className="w-5 h-5 text-white animate-spin-slow" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-800 uppercase font-display">
            {t('appName')}
          </h1>
        </div>

        {/* Global Controls: Favorites & Language Switcher */}
        <div className="flex items-center gap-4">
          {/* Favorites shortcut Button */}
          <Link
            href="/favorites"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold transition-all cursor-pointer active:scale-95 border border-indigo-100/30"
            id="nav-favorites-link"
          >
            <Star className="w-4 h-4 fill-indigo-600 text-indigo-600" />
            <span>{t('favorites')}</span>
            {favorites.length > 0 && (
              <span className="flex items-center justify-center px-1.5 py-0.5 bg-indigo-600 text-white rounded-full text-[10px] font-bold min-w-[20px]">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* Translation selector widget matching design spec */}
          <div className="flex border border-slate-200 rounded-lg overflow-hidden text-xs bg-white" id="language-toggle-group">
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
                id={`lang-switcher-${lang}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Controls & Region Selection Bar matching theme spec */}
      <section className="px-6 sm:px-10 py-5 flex flex-col md:flex-row gap-4 justify-between items-center bg-white/50 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Region:</span>
          {[
            { value: '', label: 'All' },
            { value: 'Africa', label: 'Africa' },
            { value: 'Americas', label: 'Americas' },
            { value: 'Asia', label: 'Asia' },
            { value: 'Europe', label: 'Europe' },
            { value: 'Oceania', label: 'Oceania' }
          ].map((reg) => (
            <button
              key={reg.value}
              onClick={() => { setRegion(reg.value); setVisibleCount(12); }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                region === reg.value
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>

        <div className="flex justify-end items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('sortBy')}:</span>
            <SortDropdown sortBy={sortBy} onChange={(sort) => setSortBy(sort)} />
          </div>
        </div>
      </section>

      {/* Search Bar area */}
      <div className="px-6 sm:px-10 max-w-4xl" id="search-section-wrapper">
        <SearchBar value={search} onChange={(val) => { setSearch(val); setVisibleCount(12); }} />
      </div>

      {/* Stats row or resets */}
      <div className="flex justify-between items-center py-2 px-6 sm:px-10 text-xs font-sans font-semibold text-slate-500">
        <div className="bg-slate-100 hover:bg-slate-200/60 px-3 py-1.5 rounded-lg transition-all">
          {filteredAndSortedCountries.length} {t('countriesCount')}
        </div>
        {(search || region || sortBy !== 'name-asc') && (
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 cursor-pointer active:scale-95 transition-all bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg"
            id="reset-filters-btn"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Countries Grid */}
      <main className="px-6 sm:px-10">
        {filteredAndSortedCountries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="countries-grid">
            {visibleCountries.map((country) => (
              <div key={country.cca3} className="h-full">
                <CountryCard country={country} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200/80 rounded-2xl" id="countries-empty-state">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-sans font-bold text-slate-700">No countries match your selection.</h3>
            <p className="text-slate-500 text-sm mt-1 mb-6">Try refining your search text or changing the filtered continent.</p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm transition-all cursor-pointer"
            >
              Reset filter
            </button>
          </div>
        )}
      </main>

      {/* Load More Button */}
      {filteredAndSortedCountries.length > visibleCount && (
        <div className="flex justify-center pt-2 pb-16 px-6 sm:px-10" id="load-more-section">
          <button
            onClick={loadMore}
            className="px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95 text-slate-700 font-sans font-bold text-sm shadow-xs hover:shadow-sm rounded-2xl transition-all cursor-pointer hover:border-indigo-200 hover:text-indigo-600"
            id="load-more-btn"
          >
            Load More Countries ({filteredAndSortedCountries.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Classic Theme Footer matches design spec precisely */}
      <footer className="h-16 sm:h-14 bg-white border-t border-slate-200 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between shrink-0 gap-2 sm:gap-0 mt-8" id="sys-footer">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-500">System Status: Stable</span>
          </div>
          <div className="text-xs text-slate-400 hidden sm:block">Data source: REST Countries</div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-slate-400 font-medium">© 2026 WorldExplorer. Production Ready.</span>
        </div>
      </footer>
    </div>
  );
}
