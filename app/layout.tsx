import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cabinet de Psihologie București | Psihologie, Psihiatrie, Logopedie',
  description: 'Cabinet de Psihologie în București cu servicii de psihologie clinică, psihiatrie, logopedie și psihoterapie. Echipă tânără de specialiști. Ședințe la cabinet și online. Evaluare inițială gratuită.',
  keywords: [
    'cabinet psihologie București',
    'psiholog București',
    'psihiatru București',
    'logoped București',
    'psihoterapeut București',
    'logopedie online',
    'psihologie clinică București',
    'terapie anxietate',
    'terapie depresie',
    'psihoterapie online',
    'terapie de cuplu București',
    'cabinet psihiatrie București',
    'logopedie copii București',
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
    title: 'Cabinet de Psihologie București | Psihologie, Psihiatrie, Logopedie',
    description: 'Echipă de psihologi, psihoterapeuți, psihiatru și logopezi în București. Ședințe la cabinet și online.',
    url: 'https://cabinetpsihologie.ro',
    siteName: 'Cabinet de Psihologie',
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
