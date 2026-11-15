export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://sentinelot-research-2026.uk592746.chatgpt.site';
export const isPublicSite = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
export const captureEvidence = {
  date: '15 November 2026',
  caption: 'Captured 15 November 2026 · Running local prototype',
  context: 'Static captures · Retained lab data · Data Stale status preserved',
  width: 1280,
  height: 720,
};
export const team = [
  { name: 'Muhammad Abdullah', role: 'Project Lead & OT Security', email: 'i232064@isb.nu.edu.pk', primary: true },
  { name: 'Usman Khan', role: 'Platform & Dashboard Development', email: 'i232069@isb.nu.edu.pk', primary: true },
  { name: 'Momin Amin', role: 'Industrial Lab & Integration', email: 'i232081@isb.nu.edu.pk', primary: false },
];
export const capabilities = [
  { id: 'monitoring', title: 'Passive monitoring', benefit: 'Observe without getting in the way.', summary: 'Inspect a copy of HMI and PLC communications, without becoming part of the control path.', detail: 'A switch mirror port or network TAP feeds copied traffic to the sensor. Normal monitoring is passive; SentinelOT does not block control commands.' },
  { id: 'discovery', title: 'Asset discovery', benefit: 'Know what’s communicating.', summary: 'Find observed endpoints, their protocols and inferred roles in one local inventory.', detail: 'Discovery uses observed endpoints, server ports and communication direction. Silent devices may remain unseen, and an inferred role is not a verified device identity.' },
  { id: 'detection', title: 'Explainable detection', benefit: 'Understand why it was flagged.', summary: 'Connect an alert to a decoded operation, a configurable rule and its supporting context.', detail: 'Protocol-aware rules flag defined operations and behavioural thresholds. Operators can examine the rule and event evidence; a rule match still requires process context.' },
  { id: 'vulnerabilities', title: 'Offline vulnerability matching', benefit: 'Bring vulnerability context closer.', summary: 'Match reviewed device identities against locally imported intelligence.', detail: 'Matching requires approved identities, firmware and product mappings. Missing inputs stay explicitly unknown. No known match is not proof that a device is safe; intelligence needs controlled updates.' },
];
export const applications = [
  ['Water treatment', 'Understand tank, pump and setpoint communications.'],
  ['Hydropower', 'Investigate control exchanges and operational changes.'],
  ['Electrical utilities', 'Review outstation communications and DNP3 controls.'],
  ['Manufacturing', 'Trace controller interactions and unexpected writes.'],
];
export const views = [
  { id: 'inventory', name: 'Asset Inventory', image: '/media/asset-inventory-current.jpg', description: 'See observed endpoints, inferred roles and the protocols they use.', alt: 'SentinelOT asset inventory captured on 15 November 2026, showing retained PLC and client records with product identity, protocols and offline status.' },
  { id: 'events', name: 'Protocol Events', image: '/media/protocol-events-current.jpg', description: 'Trace industrial operations back to normalized protocol records.', alt: 'SentinelOT protocol events captured on 15 November 2026, showing retained Modbus TCP and S7comm identification records and capture status.' },
  { id: 'alerts', name: 'Alerts', image: '/media/alerts-current.jpg', description: 'Review rule matches with the context needed to investigate.', alt: 'SentinelOT alert investigations captured on 15 November 2026, showing retained rule matches, severities and investigation states.' },
  { id: 'network', name: 'Network Map', image: '/media/network-map-current.jpg', description: 'Follow observed communication between discovered endpoints.', alt: 'SentinelOT network map captured on 15 November 2026, showing retained PLC and client communication over Modbus TCP and S7comm.' },
  { id: 'vulnerabilities', name: 'Vulnerabilities', image: '/media/vulnerabilities-current.jpg', description: 'Review local candidate CVE matches and the identity gaps that affect assessment.', alt: 'SentinelOT offline vulnerability assessment captured on 15 November 2026, showing local database integrity, candidate OpenPLC CVEs and an identity gap. Candidates are not proof of exploitability.' },
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
