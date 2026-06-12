'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message }: LoadingProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center" id="global-loading">
      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
        {/* Animated spinner */}
        <div className="absolute w-16 h-16 border-4 border-slate-200 border-t-emerald-600 rounded-full animate-spin"></div>
        {/* Pulsing core */}
        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-950/40 rounded-full animate-ping"></div>
      </div>
      <p className="font-sans font-medium text-slate-600 animate-pulse text-sm md:text-base">
        {message || t('loading')}
      </p>
    </div>
  );
}
