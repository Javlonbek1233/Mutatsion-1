'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'world_explorer_favorites';

/**
 * Custom hook to manage favorite countries securely using localStorage
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        console.error('Failed to parse initial favorites:', e);
      }
    }
    return [];
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Mark load on mount
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const saveFavorites = useCallback((newFavorites: string[]) => {
    setFavorites(newFavorites);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
      // Dispatch custom event to sync across multiple tabs or components instantly
      window.dispatchEvent(new Event('favorites-updated'));
    } catch (e) {
      console.error('Failed to save favorites to localStorage:', e);
    }
  }, []);

  const addFavorite = useCallback((cca3: string) => {
    if (!cca3) return;
    const cleanCode = cca3.toUpperCase();
    if (!favorites.includes(cleanCode)) {
      saveFavorites([...favorites, cleanCode]);
    }
  }, [favorites, saveFavorites]);

  const removeFavorite = useCallback((cca3: string) => {
    if (!cca3) return;
    const cleanCode = cca3.toUpperCase();
    saveFavorites(favorites.filter(code => code !== cleanCode));
  }, [favorites, saveFavorites]);

  const toggleFavorite = useCallback((cca3: string) => {
    if (!cca3) return;
    const cleanCode = cca3.toUpperCase();
    if (favorites.includes(cleanCode)) {
      removeFavorite(cleanCode);
    } else {
      addFavorite(cleanCode);
    }
  }, [favorites, addFavorite, removeFavorite]);

  const isFavorite = useCallback((cca3: string) => {
    if (!cca3) return false;
    return favorites.includes(cca3.toUpperCase());
  }, [favorites]);

  // Synchronize dynamic updates among components/different tabs
  useEffect(() => {
    const handleSync = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setFavorites(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Sync favorites error:', e);
      }
    };

    window.addEventListener('favorites-updated', handleSync);
    window.addEventListener('storage', handleSync);
    
    return () => {
      window.removeEventListener('favorites-updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isLoaded,
  };
}
