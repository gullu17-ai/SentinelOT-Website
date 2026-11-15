# Assets and evidence

Reviewed 3 November 2026. The operational Flask project was read only; no services, databases, traffic generators or operational configuration were changed.

## Original asset collection (superseded screenshots)

- Original logo: `/home/kali/Desktop/sentinelot_POC/sentinelot/static/logo_light.png`, copied unmodified.
- Original icon: `sentinelot/static/logo_icon_light.png`, copied unmodified.
- Asset inventory: thesis evidence `dashboard-assets.png`.
- Protocol events: thesis evidence `dashboard-event-logs.png`.
- Alerts: `/home/kali/Pictures/Screenshots/Screenshot_20261007_034525.png`.
- Network map: `/home/kali/Pictures/Screenshots/Screenshot_20261007_034544.png`.
- Screenshot captures are historical research-lab evidence from October 2026, not live views or current production metrics. Original screenshot text and dates are preserved.
- Hero photograph: Ivan Bandura, https://unsplash.com/photos/Ac97OqAWDvg . Image: https://images.unsplash.com/photo-1533077162801-86490c593afb . Free-use image linked in Unsplash's water-treatment results. License checked: https://unsplash.com/license . Attribution is visible in the footer. This is context, not a SentinelOT deployment.
- Social preview: locally generated typography and original logo, no fabricated product imagery.

## Claims

- `docs/CURRENT_PROJECT_STATE.md`: isolated virtual lab, capture pipeline, team, prototype status, hardware and ML roadmap. Historical counts are intentionally not republished.
- `docs/rule-dataset-validation.md`: bounded public PCAP validation and coverage gaps.
- `docs/dnp3-rule-research.md`: DNP3 scenarios and explicit enumeration/information-gathering gaps.
- `docs/offline-vulnerability-detection.md` and `sentinelot/vulnerability_store.py`: current local matcher, unknown states and identity requirements. These supersede the older status file's roadmap entry for vulnerability matching. No claim of successful target-hardware deployment is made.
- No test/rule counts, performance numbers, customers, certifications, testimonials or partnerships are published.
- Public dataset references are based on the project's local validation records; the website does not claim those validations were rerun for this delivery.

## Missing before a complete media launch

1. Verified FUXA tank demo recording (normal behaviour, controlled write, process values, associated alert).
2. Reviewed English WebVTT captions, transcript and representative video poster.
3. Production domain for canonical URL, sitemap and social URLs.
4. Team photos only if desired; names work without photographs.

Contact details and all five screenshot views, including Vulnerabilities, were supplied or captured on 15 November 2026.

No appliance render is used. There are no broken media URLs or simulated dashboard screenshots.

## Interactive hardware concept (requested addition)

The user requested mouse-controlled 3D Raspberry Pi 5 hardware and animation. The viewer uses original procedural Three.js geometry, not a claimed photograph or hardware scan. The simplified component layout is illustrative. Raspberry Pi 5 interface references were checked against https://www.raspberrypi.com/products/raspberry-pi-5/ . No claimed endorsement, hardware deployment completion or performance measurements. The visible concept label supersedes the earlier 'no appliance render' note above.

## Product Studio redesign — 15 November 2026

- The circuit monogram in `public/media/sentinelot-mark.svg` reproduces the existing poster-source vector geometry from `/home/kali/Desktop/sentinelot_POC/output/pdf/poster-source/build_poster.py` (`monogram`). It replaces the older public-site logo, without changing branding inside historical screenshots.
- `public/media/hardware-concept.svg` is a code-authored illustrative static fallback for the existing hardware concept, not a photograph or evidence of deployment.
- The photograph remains in the source asset collection but is no longer displayed in the redesigned pages.
- The user approved the three names, roles and emails in `lib/content.ts`; Abdullah and Usman are primary contacts. These public-facing roles do not amend historical contribution records in the monitoring project.
- The two-page product brief uses the genuine current asset-inventory capture and user-approved contact details. Its source is `scripts/generate-brief.py`.
- No generated concept image is used as project evidence. Image generation previews timed out before implementation; the delivered website is implemented directly in Next.js.

## Current screenshot capture — 15 November 2026

The running local dashboard at `http://localhost:5000/` supplied five unedited 1280 × 720 JPEG captures: asset inventory, protocol events, retained security alerts, network map and offline vulnerability assessment. No monitoring code, service configuration, capture settings, identities, alert states or lab traffic was changed to produce them. The existing service and passive capture process remained running. The map's existing zoom control was used twice for readability.

The interface reported Data Stale. Records inside the screenshots are retained lab evidence, not a claim of fresh traffic. The vulnerability view shows candidate CVEs and identity gaps, not proof of exploitability. Dashboard branding, dates, counts and status labels are preserved exactly as rendered. Website captions distinguish the capture date from the data dates.

The gallery, homepage, demo still and product brief now consume these captures. The older PNGs remain in the source asset collection but are not displayed. See `docs/SCREENSHOT-CAPTURES-2026-11-15.md` for paths, source views and SHA-256 hashes.

## Poster equipment illustrations — 15 November 2026

At the user's request, How it works now reuses the four existing FYP poster equipment assets. Files were copied unchanged from `/home/kali/Desktop/sentinelot_POC/output/pdf/poster-source/assets/` into `public/media/architecture/`:

- `hmi-panel.jpg`: Siemens HMI panel; poster provenance records https://www.dmarktech.com/wp-content/uploads/simatic-hmi-basic-panel-ktp700-front.jpg .
- `managed-switch.jpg`: Moxa managed switch; poster provenance records https://www.moxa.com/en/getattachment/Products/INDUSTRIAL-NETWORK-INFRASTRUCTURE/Ethernet-Switches/Layer-2-Managed-Switches/EDS-408A-Series/EDS-408A/moxa-eds-408a-image.jpg .
- `plc-controller.png`: Siemens controller; poster provenance records https://static.siemens.com/mimes/10001000PNG/P_ST70_XX_04845P.png .
- `raspberry-pi-case.png`: the case illustration supplied in the poster assets. No independent source or usage license is recorded in the poster source map; no license verification is claimed.

These are illustrative equipment images from the user-supplied poster, not photographs of deployed SentinelOT hardware or claims of vendor endorsement. Original image files and proportions are preserved. CSS frames suppress excess white margins while keeping each device visible. The architecture labels distinguish the live control path, copied capture traffic, planned Raspberry Pi 5 platform, local analysis and separate management connection. No monitoring-project code or the poster itself was changed.
