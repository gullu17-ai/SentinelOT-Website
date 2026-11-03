import type { Metadata } from 'next';
import { isPublicSite, siteUrl } from '@/lib/content';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SentinelOT | Offline-first industrial network visibility',
  description: 'An OT/ICS research prototype from FAST NUCES Islamabad. Passive visibility, protocol-aware rules and explainable local evidence for industrial networks.',
  alternates: { canonical: '/' },
  robots: { index: isPublicSite, follow: isPublicSite },
  openGraph: { title: 'SentinelOT', description: 'Offline-first visibility for industrial networks. A research prototype from FAST NUCES Islamabad.', type: 'website', url: '/', images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'SentinelOT. Offline-first visibility for industrial networks. Research prototype.' }] },
  twitter: { card: 'summary_large_image', title: 'SentinelOT', description: 'Offline-first visibility for industrial networks.', images: ['/social-preview.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
