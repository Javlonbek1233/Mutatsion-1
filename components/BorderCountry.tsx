'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BorderCountryProps {
  cca3: string;
  nameCommon: string;
  flag: string;
}

export default function BorderCountry({ cca3, nameCommon, flag }: BorderCountryProps) {
  return (
    <Link
      href={`/country/${cca3.toLowerCase()}`}
      className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 border border-slate-100 rounded-xl text-xs font-sans font-semibold text-slate-700 transition-all select-none active:scale-95 cursor-pointer shadow-2xs"
      id={`border-link-${cca3.toLowerCase()}`}
    >
      <div className="relative w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0 border border-slate-200/50">
        <Image
          src={flag}
          alt={`${nameCommon} Flag`}
          fill
          sizes="20px"
          className="object-cover"
          referrerPolicy="no-referrer"
          priority={false}
        />
      </div>
      <span className="truncate max-w-[120px]">{nameCommon}</span>
    </Link>
  );
}
