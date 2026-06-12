import React from 'react';
import { Metadata } from 'next';
import { getAllCountries } from '@/lib/api';
import FavoritesClient from '@/components/FavoritesClient';
import ErrorMessage from '@/components/ErrorMessage';

export const metadata: Metadata = {
  title: 'My Favorites | WorldExplorer',
  description: 'Manage and explore your list of favorite countries in one simple visual place.',
};

export default async function FavoritesPage() {
  const allCountries = await getAllCountries();

  if (!allCountries || allCountries.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-16">
        <ErrorMessage message="Could not fetch countries to reload favorites. Please verify your connection or try again." />
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <FavoritesClient allCountries={allCountries} />
    </main>
  );
}
