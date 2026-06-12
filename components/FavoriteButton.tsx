'use client';

import React from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { useLanguage } from '@/hooks/useLanguage';
import { Star } from 'lucide-react';

interface FavoriteButtonProps {
  cca3: string;
  variant?: 'icon' | 'full';
  className?: string;
}

export default function FavoriteButton({ cca3, variant = 'icon', className = '' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const { t } = useLanguage();

  if (!cca3) return null;

  const active = isFavorite(cca3);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(cca3);
  };

  if (!isLoaded) {
    // Elegant tiny skeleton
    return (
      <div className={`w-10 h-10 rounded-xl bg-slate-100 animate-pulse ${className}`} />
    );
  }

  if (variant === 'full') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-sans font-medium text-sm transition-all cursor-pointer active:scale-97 select-none ${
          active
            ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-500/10'
            : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs'
        } ${className}`}
        id={`fav-btn-full-${cca3}`}
        title={active ? t('removeFavorite') : t('addFavorite')}
      >
        <Star className={`w-5 h-5 transition-transform duration-300 ${active ? 'fill-white scale-110' : ''}`} />
        <span>{active ? t('removeFavorite') : t('addFavorite')}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative p-2.5 rounded-xl transition-all active:scale-90 bg-white/90 backdrop-blur-xs hover:bg-white text-slate-700 hover:text-amber-500 border border-slate-100 shadow-sm cursor-pointer group select-none ${className}`}
      id={`fav-btn-icon-${cca3}`}
      title={active ? t('removeFavorite') : t('addFavorite')}
    >
      <Star
        className={`w-5 h-5 transition-all duration-300 ${
          active
            ? 'text-amber-500 fill-amber-500 scale-110'
            : 'text-slate-400 group-hover:scale-110 group-hover:text-amber-500'
        }`}
      />
    </button>
  );
}
