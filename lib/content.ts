export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://sentinelot-research-2026.uk592746.chatgpt.site';
export const isPublicSite = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
export const views = [
  { id: 'inventory', name: 'Asset Inventory', image: '/media/asset-inventory.png', description: 'See observed endpoints, inferred roles and the protocols they use.', alt: 'Genuine SentinelOT lab asset inventory showing the PLC and HMI with observed protocol and port information.' },
  { id: 'events', name: 'Protocol Events', image: '/media/protocol-events.png', description: 'Trace industrial operations back to normalized protocol records.', alt: 'Genuine SentinelOT event log with timestamps, source and destination addresses and decoded operations.' },
  { id: 'alerts', name: 'Alerts', image: '/media/alerts.png', description: 'Review rule matches with the context needed to investigate.', alt: 'Genuine SentinelOT security alerts screen captured from the research lab.' },
  { id: 'network', name: 'Network Map', image: '/media/network-map.png', description: 'Follow observed communication between the HMI and controller.', alt: 'Genuine SentinelOT network map showing the lab HMI and PLC linked by industrial protocols.' },
  { id: 'vulnerabilities', name: 'Vulnerabilities', image: null, description: 'Match reviewed device identities against locally imported vulnerability intelligence.', alt: '' },
];
export type DemoMedia = { src: string; poster: string; captions: string; transcript: string };
// Set only when the actual recording, reviewed captions, poster and transcript are supplied.
export const demoMedia: DemoMedia | null = null;
export const protocols = [
  { name: 'Modbus TCP', scope: 'Lab polling and controlled writes; selected public benign and fake-command captures.', limit: 'Coverage depends on decoded functions. Not every diagnostic or programming operation has independent validation.' },
  { name: 'Siemens S7comm', scope: 'Lab read/write traffic; selected public control, threshold-change and write-flood captures.', limit: 'S7comm coverage does not imply S7comm Plus support. Lifecycle and program-transfer paths need broader evidence.' },
  { name: 'DNP3', scope: 'Lab traffic and selected public command, restart, communication-gap and replay scenarios.', limit: 'Enumeration and information-gathering scenarios lack reliable signals in the current logs. Product identity remains manual.' },
  { name: 'EtherNet/IP / CIP', scope: 'Lab traffic; selected public controller and session-exhaustion captures.', limit: 'Coverage follows the installed analyzer and decoded services. A physical mode change may produce no network control request.' },
];
