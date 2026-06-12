'use client';

import React, { useEffect } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Unhandled app error bounded:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[90vh] p-4 bg-slate-50/20">
      <ErrorMessage 
        message={error?.message || "Something went wrong while launching the WorldExplorer page."} 
        onRetry={reset} 
      />
    </div>
  );
}
