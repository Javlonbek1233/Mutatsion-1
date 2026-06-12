'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowUpDown } from 'lucide-react';

interface SortDropdownProps {
  sortBy: string;
  onChange: (sortVal: string) => void;
}

export default function SortDropdown({ sortBy, onChange }: SortDropdownProps) {
  const { t } = useLanguage();

  const options = [
    { value: 'name-asc', label: t('sortNameAsc') },
    { value: 'name-desc', label: t('sortNameDesc') },
    { value: 'pop-desc', label: t('sortPopDesc') },
    { value: 'pop-asc', label: t('sortPopAsc') },
    { value: 'area-desc', label: t('sortAreaDesc') },
    { value: 'area-asc', label: t('sortAreaAsc') },
  ];

  return (
    <div className="relative min-w-[220px]" id="sort-dropdown-wrapper">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <ArrowUpDown className="w-4 h-4" />
      </div>
      <select
        value={sortBy}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 rounded-xl text-slate-700 text-xs shadow-xs appearance-none cursor-pointer transition-all font-sans font-semibold hover:bg-slate-50"
        id="sort-select-element"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
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
