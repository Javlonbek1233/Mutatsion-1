'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, House } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-6 text-center" id="not-found-screen">
      <div className="p-4 bg-emerald-50 rounded-full text-emerald-600 mb-6 animate-pulse">
        <Compass className="w-12 h-12" />
      </div>
      <h1 className="font-sans font-black text-4xl md:text-5xl text-slate-800 tracking-tight">404</h1>
      <h2 className="font-sans font-bold text-xl text-slate-700 mt-2 mb-3">
        Page Not Found / Sahifa topilmadi
      </h2>
      <p className="font-sans text-slate-500 text-sm md:text-base max-w-sm mb-8">
        The country or page you are exploring doesn&apos;t exist or was moved to another territory.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-2xl transition-all shadow-sm active:scale-95 cursor-pointer"
        id="not-found-back-home"
      >
        <House className="w-4 h-4" />
        <span>{t('backHome')}</span>
      </Link>
    </div>
  );
}
