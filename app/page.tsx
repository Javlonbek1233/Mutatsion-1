import React from 'react';
import { getAllCountries } from '@/lib/api';
import CountriesClient from '@/components/CountriesClient';
import ErrorMessage from '@/components/ErrorMessage';

export const revalidate = 3600; // Cache the home page for 1 hour

export default async function HomePage() {
  const countries = await getAllCountries();

  if (!countries || countries.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <ErrorMessage message="Could not fetch any country listings from the REST Countries server. Please verify your connection or try again later." />
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <CountriesClient initialCountries={countries} />
    </main>
  );
}
