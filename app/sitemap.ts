import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/content';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return ['', 'product/', 'research/', 'about/'].map(path => ({ url: `${siteUrl}/${path}`, lastModified: '2026-11-21', changeFrequency: 'monthly', priority: path ? 0.8 : 1 })); }
