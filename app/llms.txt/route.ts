import { siteUrl } from '@/lib/content';

export const dynamic = 'force-static';

export function GET() {
  return new Response(`# SentinelOT

> Offline-first OT/ICS security research prototype developed at FAST NUCES Islamabad.

SentinelOT provides passive industrial traffic monitoring, observed asset discovery, explainable protocol-aware alerts and local vulnerability matching. The public website contains static product evidence and is separate from the operational monitoring dashboard.

## Official pages
- [Overview](${siteUrl}/): Project identity, capabilities and product screenshots.
- [Product](${siteUrl}/product/): Dashboard views, protocol scope, proposed architecture and common questions.
- [Research](${siteUrl}/research/): Evidence, dataset boundaries, limitations and roadmap.
- [Team and contact](${siteUrl}/about/): Muhammad Abdullah and Usman Khan; approved contact details.

## Scope and limitations
The four in-scope protocols are Modbus TCP, Siemens S7comm, DNP3 and EtherNet/IP/CIP. Scope does not imply every protocol operation is supported. The current product is a research prototype, not a production-ready deployment. Raspberry Pi hardware deployment and machine-learning anomaly detection remain roadmap items. Intended industrial applications are not verified customer deployments.

## Evidence
Dashboard screenshots are genuine captures of retained lab data from 15 November 2026, with Data Stale status preserved. A demonstration recording has not yet been supplied. Automated test coverage and selected public dataset scenarios do not establish real-world detection effectiveness.
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
