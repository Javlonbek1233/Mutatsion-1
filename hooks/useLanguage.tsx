'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TranslationDict } from '@/types';
import { getTranslation } from '@/utils/formatters';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: keyof TranslationDict) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('world_explorer_lang') as LanguageCode;
        if (stored && ['en', 'uz', 'ru'].includes(stored)) {
          return stored;
        }
      } catch (e) {
        console.error('Error loading language from local storage:', e);
      }
    }
    return 'uz';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('world_explorer_lang', lang);
    } catch (e) {
      console.error('Error saving language selection:', e);
    }
  };

  const t = (key: keyof TranslationDict): string => {
    return getTranslation(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
