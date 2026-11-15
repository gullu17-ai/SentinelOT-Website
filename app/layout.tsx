import type { Metadata } from 'next';
import { isPublicSite, siteUrl } from '@/lib/content';
import './globals.css';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Site';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'SentinelOT | Offline-first industrial network visibility', template: '%s | SentinelOT' },
  description: 'An OT/ICS research prototype from FAST NUCES Islamabad. Passive visibility, protocol-aware rules and explainable local evidence for industrial networks.',
  alternates: { canonical: '/' },
  icons: { icon: '/media/sentinelot-mark.svg' },
  robots: { index: isPublicSite, follow: isPublicSite },
  openGraph: { title: 'SentinelOT', description: 'Offline-first visibility for industrial networks. A research prototype from FAST NUCES Islamabad.', type: 'website', url: '/', images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'SentinelOT. Offline-first visibility for industrial networks. Research prototype.' }] },
  twitter: { card: 'summary_large_image', title: 'SentinelOT', description: 'Offline-first visibility for industrial networks.', images: ['/social-preview.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main">{children}</main><Footer /></body></html>;
}
