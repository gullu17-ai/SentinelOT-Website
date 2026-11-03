import type { MetadataRoute } from 'next';
import { siteUrl, isPublicSite } from '@/lib/content';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', ...(isPublicSite ? { allow: '/' } : { disallow: '/' }) }, sitemap: siteUrl + '/sitemap.xml' }; }
