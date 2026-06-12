'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Country } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { formatNumber } from '@/utils/formatters';
import FavoriteButton from './FavoriteButton';
import { motion } from 'motion/react';

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  const { t } = useLanguage();
  const { cca3, name, flags, population, region, capital } = country;

  const capitalName = capital && capital.length > 0 ? capital[0] : 'N/A';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
      id={`country-card-${cca3.toLowerCase()}`}
    >
      {/* Favorite Button Overlay */}
      <div className="absolute top-3 right-3 z-10">
        <FavoriteButton cca3={cca3} variant="icon" />
      </div>

      <Link href={`/country/${cca3.toLowerCase()}`} className="flex flex-col h-full cursor-pointer">
        {/* Flag Image Container */}
        <div className="relative aspect-video w-full bg-slate-55 overflow-hidden border-b border-slate-200">
          <Image
            src={flags.svg || flags.png || 'https://picsum.photos/seed/flag/640/485'}
            alt={flags.alt || `${name.common} Flag`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-104 transition-transform duration-500"
            referrerPolicy="no-referrer"
            priority={false}
          />
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-sans font-bold text-slate-800 group-hover:text-indigo-600 transition-colors text-base md:text-lg mb-4 line-clamp-1">
            {name.common}
          </h3>

          <div className="space-y-2 text-xs text-slate-600 font-sans mt-auto">
            <div className="flex justify-between items-center py-1 border-b border-slate-100">
              <span className="text-slate-400 font-bold">{t('population')}:</span>
              <span className="font-semibold text-slate-800">{formatNumber(population)}</span>
            </div>
            
            <div className="flex justify-between items-center py-1 border-b border-slate-100">
              <span className="text-slate-400 font-bold">{t('region')}:</span>
              <span className="font-semibold text-slate-800">{region}</span>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-slate-400 font-bold">{t('capital_label')}:</span>
              <span className="font-semibold text-slate-800 truncate max-w-[150px]">{capitalName}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
