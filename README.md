# WorldExplorer — Dunyo Davlatlari Ma'lumotlar Platformasi

WorldExplorer is a production-grade, highly optimized data visualization platform for exploring world countries built with **Next.js 15 (App Router)** and **TypeScript**. It offers comprehensive country profiles, advanced search, filtering, sorting, localization support, and persistent user favorites.

## 🚀 Beautiful Features

- **⚡ Multi-language Support (UZ, EN, RU)**: Integrated a dynamic, client-side localization system with language selectors synced across all pages. Default set to Uzbek.
- **✨ Full-Stack Architecture**: Server-side fetching and metadata generation via Next.js App Router, paired with highly responsive React client elements.
- **🔒 Persistent Favorites**: Fully synchronized, SSR-hydration-safe Favorite countries storage powered by browser `localStorage` and custom change synchronization events.
- **🔍 Advanced Exploration**: Debounced fuzzy searching by country name, alternative titles, regions, and capital city listings.
- **🗺️ Responsive Bento Grid**: Clean layouts styled with **Tailwind CSS**, featuring custom icons, fluid image loading, and micro-interactions.
- **📦 Edge Caching**: Country data matches are cached on Next.js servers with automatic 1-hour revalidation blocks for optimal response times.

---

## 📂 Architecture & File Map

```text
world-explorer/
├── app/
│   ├── layout.tsx         # Unified global fonts configuration and Localization Wrappers
│   ├── page.tsx           # Server component fetching initial REST Countries lists
│   ├── globals.css        # Tailwind standard imports
│   ├── loading.tsx        # Global fallback routing spinners
│   ├── error.tsx          # Comprehensive routing error boundaries
│   ├── not-found.tsx      # Multi-lingual custom 404 handler
│   ├── country/
│   │   └── [cca3]/
│   │       ├── page.tsx    # Asynchronous param loader & Dynamic metadata generator
│   │       └── loading.tsx # Elegant detail section loaders
│   └── favorites/
│       └── page.tsx       # Favorites list parent container
│
├── components/
│   ├── CountryCard.tsx    # Interactive Grid Country displays with animated card hovers
│   ├── SearchBar.tsx      # Real-time search element with localized placeholder tags
│   ├── RegionFilter.tsx   # Continent dropdown filters
│   ├── SortDropdown.tsx   # Sort by name alphabetical, population, and areas
│   ├── FavoriteButton.tsx # Heart/Star favorite action badges
│   ├── Loading.tsx        # Dynamic loading state spinner
│   ├── ErrorMessage.tsx   # Failures handler equipped with retry buttons
│   ├── StatCard.tsx       # Icons-powered numerical info cards
│   ├── BorderCountry.tsx  # Interactive border-sharing country badges
│   └── CountriesClient.tsx # Main orchestration logic
│
├── hooks/
│   ├── useFavorites.ts   # Hydration-safe syncing favorites hook
│   └── useDebounce.ts     # performance optimization debouncer hook
│
├── lib/
│   └── api.ts             # REST Countries API wrapper client holding cache intervals
│
├── types/
│   └── index.ts           # Typescript mappings and dictionary interfaces
│
└── utils/
    └── formatters.ts      # Multi-language translations and numbers formatting rules
```

---

## 🛠️ Installation & Setup

1. **Verify Dependencies**:
   Verify that all packages are listed inside your package.json correctly.

2. **Launch Dev Server**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

## 🌍 Localization System

WorldExplorer translates headings, card attributes, actions, empty states, and errors into **Uzbek (UZ)**, **English (EN)**, and **Russian (RU)**. All state properties are saved locally to provide instant visual syncs during page transitions.
