import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/content';

const siteUrl = 'https://www.emcbtp.tg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'EMC BTP — Matériaux de construction & livraison à Lomé',
  description: site.description,
  keywords: [
    'matériaux de construction Lomé',
    'sable gravier ciment Togo',
    'livraison matériaux BTP Lomé',
    'fer à béton Togo',
    'EMC BTP Sagbado',
  ],
  openGraph: {
    title: 'EMC BTP — Matériaux de construction & livraison à Lomé',
    description: site.description,
    url: siteUrl,
    siteName: 'EMC BTP',
    images: ['/images/gravier-en-camion.webp'],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMC BTP — Matériaux de construction & livraison à Lomé',
    description: site.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'EMC BTP',
  description: site.description,
  image: `${siteUrl}/images/gravier-en-camion.webp`,
  telephone: site.whatsappNumber,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sagbado',
    addressLocality: 'Lomé',
    addressCountry: 'TG',
  },
  areaServed: 'Grand Lomé',
  openingHours: 'Mo-Sa 07:00-18:00',
  url: siteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
