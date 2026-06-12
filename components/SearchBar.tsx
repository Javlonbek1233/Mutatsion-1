'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const { t } = useLanguage();

  return (
    <div className="relative flex-1 min-w-[280px]" id="search-bar-container">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || t('searchPlaceholder')}
        className="w-full pl-11 pr-11 py-3 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-full text-slate-750 text-sm transition-all placeholder:text-slate-400"
        id="search-input-field"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          id="search-clear-btn"
          title="Clear search"
        >
          <X className="w-5 h-5 bg-slate-50 hover:bg-slate-100 rounded-full p-0.5" />
        </button>
      )}
    </div>
  );
}
