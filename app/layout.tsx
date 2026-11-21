import type { Metadata } from 'next';
import { isPublicSite, siteUrl } from '@/lib/content';
import './globals.css';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Site';
import StructuredData from '@/components/StructuredData';
import { siteEntities } from '@/lib/structured-data';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'SentinelOT | Offline-first OT/ICS Security & Monitoring', template: '%s | SentinelOT' },
  description: 'SentinelOT is an offline-first OT/ICS security research prototype from FAST NUCES Islamabad, with passive asset discovery, protocol-aware alerts and local vulnerability matching.',
  applicationName: 'SentinelOT',
  category: 'Industrial cybersecurity',
  creator: 'SentinelOT research team',
  publisher: 'SentinelOT',
  alternates: { canonical: '/' },
  icons: { icon: '/media/sentinelot-mark.svg' },
  robots: { index: isPublicSite, follow: true, ...(isPublicSite ? { googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1, 'max-video-preview': -1 } } : {}) },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || 'cw6Ilp5BAVuwBmW5MfqTwkvPQuz6v57l0YkM6uhqROA', other: process.env.BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } : undefined },
  openGraph: { title: 'SentinelOT | Offline-first OT/ICS Security', siteName: 'SentinelOT', locale: 'en_US', description: 'Passive industrial network monitoring, asset discovery and explainable alerts. A research prototype from FAST NUCES Islamabad.', type: 'website', url: '/', images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'SentinelOT. Offline-first visibility for industrial networks. Research prototype.' }] },
  twitter: { card: 'summary_large_image', title: 'SentinelOT', description: 'Offline-first visibility for industrial networks.', images: ['/social-preview.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><StructuredData data={siteEntities} /><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main">{children}</main><Footer /></body></html>;
}
