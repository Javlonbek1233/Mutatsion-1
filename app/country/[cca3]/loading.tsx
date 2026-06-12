'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function CountryDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8 animate-pulse">
      
      {/* Back button loading skeleton */}
      <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-slate-100">
        <div className="w-24 h-5 bg-slate-200 rounded-lg"></div>
        <div className="ml-auto w-32 h-8 bg-slate-200 rounded-lg"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column Skeleton */}
        <div className="lg:col-span-5 space-y-6">
          <div className="aspect-video w-full bg-slate-200 rounded-2xl"></div>
          <div className="space-y-3">
            <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
            <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3 pb-5">
            <div className="h-10 bg-slate-200 rounded-lg w-1/2"></div>
            <div className="h-5 bg-slate-100 rounded-lg w-1/3"></div>
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-24 bg-slate-200 rounded-2xl"></div>
            <div className="h-24 bg-slate-200 rounded-2xl"></div>
            <div className="h-24 bg-slate-200 rounded-2xl"></div>
            <div className="h-24 bg-slate-200 rounded-2xl"></div>
          </div>

          {/* Lists Skeleton */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-48 space-y-4">
            <div className="h-6 bg-slate-200 rounded-md w-1/4 mb-4"></div>
            <div className="h-4 bg-slate-200 rounded-md w-full"></div>
            <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded-md w-4/5"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
