'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';

interface RegionFilterProps {
  selectedRegion: string;
  onChange: (region: string) => void;
}

export default function RegionFilter({ selectedRegion, onChange }: RegionFilterProps) {
  const { t } = useLanguage();

  const regions = [
    { value: '', label: t('allRegions') },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
    { value: 'Antarctic', label: 'Antarctic' },
  ];

  return (
    <div className="relative min-w-[180px]" id="region-filter-wrapper">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <Globe className="w-4 h-4" />
      </div>
      <select
        value={selectedRegion}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-3.5 bg-white border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 rounded-2xl text-slate-700 text-sm shadow-xs appearance-none cursor-pointer transition-all font-sans font-medium hover:bg-slate-50"
        id="region-select-element"
      >
        {regions.map((reg) => (
          <option key={reg.value} value={reg.value}>
            {reg.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
