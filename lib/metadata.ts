import type { Metadata } from 'next';
import { siteUrl } from './content';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | SentinelOT`, description, url: path, type: 'website',
      images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'SentinelOT. Offline-first industrial network visibility. Research prototype.' }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | SentinelOT`, description, images: [`${siteUrl}/social-preview.png`] },
  };
}
