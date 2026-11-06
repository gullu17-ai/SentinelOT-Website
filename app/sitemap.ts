import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/product',
    '/how-it-works',
    '/solutions',
    '/resources',
    '/technical-docs',
    '/company',
    '/trust',
    '/partners',
    '/contact',
    '/platform',
    '/architecture',
    '/hardware',
    '/research',
    '/about',
  ];
  return routes.map(route => ({
    url: `${siteUrl}${route}/`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : (['/product', '/how-it-works', '/solutions', '/contact'].includes(route) ? 0.9 : 0.8),
  }));
}
