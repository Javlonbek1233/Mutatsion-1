'use client';

import React from 'react';
import Loading from '@/components/Loading';

export default function RootLoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-slate-50/20">
      <Loading />
    </div>
  );
}
