import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Inter, Space_Grotesk } from 'next/font/google';
import { LanguageProvider } from '@/hooks/useLanguage';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'WorldExplorer — Dunyo Davlatlari Ma’lumotlar Platformasi',
  description: 'Explore the countries of the world with stats, maps, population charts, borders, and multi-language support.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-[#f8fafc] text-slate-900 antialiased min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

