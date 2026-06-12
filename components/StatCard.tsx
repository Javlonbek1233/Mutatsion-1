'use client';

import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  color?: string;
}

export default function StatCard({ title, value, icon, description, color = 'emerald' }: StatCardProps) {
  // Map color options to beautiful Tailwind CSS definitions
  const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      ring: 'border-emerald-100',
    },
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      text: 'text-blue-600 dark:text-blue-400',
      ring: 'border-blue-100',
    },
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-950/20',
      text: 'text-amber-600 dark:text-amber-400',
      ring: 'border-amber-100',
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      text: 'text-purple-600 dark:text-purple-400',
      ring: 'border-purple-100',
    },
    indigo: {
      bg: 'bg-indigo-50 dark:bg-indigo-950/20',
      text: 'text-indigo-600 dark:text-indigo-400',
      ring: 'border-indigo-100',
    },
  };

  const selectedColors = colorMap[color] || colorMap.emerald;

  return (
    <div 
      className={`p-5 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-start gap-4 hover:border-indigo-400 hover:shadow-md transition-all`}
      id={`stat-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`p-3 rounded-xl ${selectedColors.bg} ${selectedColors.text}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-sans text-xs text-slate-500 font-medium tracking-wide uppercase">
          {title}
        </p>
        <h4 className="font-sans text-lg md:text-xl font-bold text-slate-800 mt-1 truncate">
          {value}
        </h4>
        {description && (
          <p className="font-sans text-xs text-slate-600 mt-1 truncate">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
