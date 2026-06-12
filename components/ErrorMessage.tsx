'use client';

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  const { t } = useLanguage();

  return (
    <div 
      className="flex flex-col items-center justify-center p-8 m-4 text-center bg-rose-50 border border-rose-100 rounded-2xl max-w-lg mx-auto" 
      id="error-message-box"
    >
      <div className="p-3 bg-rose-100 rounded-full text-rose-600 mb-4 animate-bounce">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-sans font-semibold text-slate-800 mb-2">
        {t('errorLoading')}
      </h3>
      <p className="text-slate-600 text-sm mb-6 max-w-sm">
        {message || 'The application was unable to fetch information from the REST Countries service. Please check your internet connection.'}
      </p>
      {onRetry ? (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-sm font-medium rounded-xl transition-all shadow-sm cursor-pointer"
          id="btn-retry"
        >
          <RotateCcw className="w-4 h-4" />
          {t('tryAgain')}
        </button>
      ) : (
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-sm font-medium rounded-xl transition-all shadow-sm cursor-pointer"
          id="btn-retry-reload"
        >
          <RotateCcw className="w-4 h-4" />
          {t('tryAgain')}
        </button>
      )}
    </div>
  );
}
