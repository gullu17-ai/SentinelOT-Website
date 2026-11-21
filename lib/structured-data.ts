import { siteUrl, team } from './content';

export const siteEntities = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#project`, name: 'SentinelOT', url: siteUrl, logo: `${siteUrl}/media/sentinelot-mark.svg`, description: 'OT/ICS security research project developed at FAST NUCES Islamabad.', member: team.map(person => ({ '@type': 'Person', name: person.name, url: `${siteUrl}/about/#team`, affiliation: { '@type': 'EducationalOrganization', name: 'FAST NUCES Islamabad' } })) },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'SentinelOT', url: `${siteUrl}/`, inLanguage: 'en', publisher: { '@id': `${siteUrl}/#project` } },
    { '@type': 'SoftwareApplication', '@id': `${siteUrl}/#software`, name: 'SentinelOT', url: `${siteUrl}/product/`, applicationCategory: 'SecurityApplication', operatingSystem: 'Linux', description: 'Offline-first OT/ICS security research prototype for passive asset discovery, protocol-aware rule detection and local vulnerability matching. Hardware deployment and machine learning remain roadmap items.', publisher: { '@id': `${siteUrl}/#project` }, image: `${siteUrl}/media/asset-inventory-current.jpg`, featureList: ['Passive industrial traffic monitoring', 'Observed asset discovery', 'Explainable protocol-aware alerts', 'Offline vulnerability matching'] },
  ],
};

export function pageEntities(name: string, path: string, description: string) {
  const pageUrl = `${siteUrl}${path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${pageUrl}#page`, name, url: pageUrl, description, inLanguage: 'en', isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': `${siteUrl}/#software` }, ...(path !== '/' ? { breadcrumb: { '@id': `${pageUrl}#breadcrumb` } } : {}) },
      ...(path === '/' ? [] : [{ '@type': 'BreadcrumbList', '@id': `${pageUrl}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` }, { '@type': 'ListItem', position: 2, name, item: pageUrl }] }]),
    ],
  };
}
