import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import SectionDivider from './components/SectionDivider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'En el silencio del ser',
  description: 'Un espacio digital para respiración consciente, secuencias de yoga, y reflexiones. Hecho con ❤️ por Fabián Martín Balmaceda Rescia',
  keywords: ['yoga', 'meditación', 'respiración consciente', 'bienestar', 'paz interior'],
  authors: [{ name: 'Fabián Martín Balmaceda Rescia' }],
  openGraph: {
    title: 'En el silencio del ser',
    description: 'Un espacio digital para respiración consciente, secuencias de yoga, y reflexiones.',
    url: 'https://zen.balmacefa.com',
    siteName: 'En el silencio del ser',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={playfair.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="site-bg font-['Quicksand'] min-h-screen text-slate-800 pt-[70px] overflow-x-hidden">
        <Nav />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <header className="text-center mb-8 md:mb-12 mt-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-indigo-800 to-slate-800 drop-shadow-sm">En el silencio del ser</h1>
            <SectionDivider className="mt-5" />
          </header>
          <main className="w-full flex-grow">
            {children}
          </main>
          <footer className="text-center mt-16 pt-8 border-t border-slate-200/60 pb-8 text-slate-500 font-medium">
            <SectionDivider className="mb-6" tone="rose" />
            Hecho con ❤️ por Fabián Martín Balmaceda Rescia
          </footer>
        </div>
      </body>
    </html>
  );
}
