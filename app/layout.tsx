import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cabinet Psihologie & Psihoterapie București | Anxietate, Depresie, Traume',
  description: 'Psihoterapeut în București. Lucrez cu anxietate, depresie, traume, probleme de relație. Ședințe la cabinet și online. Evaluare inițială gratuită. Programează acum.',
  keywords: [
    'psihoterapeut București',
    'cabinet psihologie București',
    'terapie anxietate',
    'terapie depresie',
    'psihoterapie online',
    'psihoterapeut pentru traume',
    'terapie de cuplu București',
    'psiholog București',
    'terapie online România',
    'cabinet psihoterapie',
  ],
  authors: [{ name: 'Cabinet Psihologie' }],
  creator: 'Roxana Lăudatu',
  publisher: 'Cabinet Psihologie',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://cabinetpsihologie.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cabinet Psihologie & Psihoterapie București',
    description: 'Spațiul tău sigur pentru vindecare. Psihoterapeut specializat în anxietate, depresie, traume și probleme de relație.',
    url: 'https://cabinetpsihologie.ro',
    siteName: 'Cabinet Psihologie',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cabinet Psihologie București',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Psihologie & Psihoterapie București',
    description: 'Spațiul tău sigur pentru vindecare. Ședințe la cabinet și online.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        {/* Preconnect pentru Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color */}
        <meta name="theme-color" content="#4A7C7E" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
