# Verification and Anti Slop delivery gate

Checked 3 November 2026 using the production static export in local Chromium, with software WebGL for the hardware viewer. The final Next.js build and its TypeScript check passed. No application JavaScript exceptions were observed in the interaction runs.

## Functional checks

- PASS: Product, How It Works, Use Cases, Research, About and Watch Demo navigation reaches its corresponding section.
- PASS: all fragment links resolve to existing IDs; hardware shortcut reaches the viewer.
- PASS: Asset Inventory, Protocol Events, Alerts and Network Map show their genuine screenshots; all four expand in a native dialog and close with Escape. Re-selecting the current tab does not leave a loading overlay.
- PASS: Vulnerabilities displays an explicit evidence-pending state.
- PASS: tab ArrowRight changes selection; source implements symmetric ArrowLeft and Home/End handling with tab focus. Visible focus styles are present.
- PASS: all research disclosure panels open and close.
- PASS: mobile navigation opens, selecting Research closes it, Escape closes it and returns focus to the toggle.
- PASS: hardware automatic rotation, pause, flip, reset, zoom in and zoom out controls execute without application exceptions. Mouse dragging and keyboard arrows/plus/reset work. Reduced-motion browser preference starts automatic rotation paused.
- PASS: screenshots inspected at 1440px desktop and 390px mobile. Layout checks at 320, 390, 768, 1024 and 1440px show no horizontal document overflow. Original screenshots can be expanded and scrolled for readable detail.
- PASS: all page images load after their lazy-load regions are visited. A deliberately blocked screenshot displays the error state and retry successfully reloads it after unblocking.
- PASS: 404 return link works. Social preview, sitemap and robots.txt return HTTP 200.
- PASS: text/background palette measurements: primary 13.41:1, muted on white 6.41:1, muted on pale background 5.84:1, white on teal 9.48:1, white on hero button 7.65:1, viewer text 7.07:1, architecture text 8.71:1. Hero overlay protects copy; its right-hand link has a solid dark background. Original product screenshots preserve their source colors and are not a redesign of the monitoring dashboard.

## Hard gate

- PASS R-02: authored UI text contains no em dash.
- PASS R-03: checked responsive widths with no horizontal page overflow; controls and screenshots remain within layout.
- PASS R-17: no invented rule counts, test counts, performance or accuracy statistics.
- PASS R-18: no testimonials or invented people.
- PASS R-23: original assets used; user explicitly requested the 3D hardware concept; no generated logo or portrait.
- PASS R-24: all navigation targets exist.
- PASS R-25: measured site palette meets AA text ratios; photo overlay and solid link backing checked visually.
- PASS R-26: controls execute real actions; missing media is explicit and has no fake play button.
- PASS R-27: image loading, failure/retry, missing evidence and WebGL fallback states implemented; image recovery exercised.
- PASS R-28: no generic FAQ.
- PASS R-32: keyboard tabs, modal Escape, menu Escape, hardware keyboard handling and focus indicators verified.
- PASS R-33: UI implemented directly in source, not source-rewriting patch scripts.
- PASS R-34: one requested light theme; no incomplete theme toggle.
- PASS R-35: production build, browser interactions and screenshots recorded above.
- PASS R-36: prototype status, roadmap and evidence boundaries explicit; no unsupported endorsements or readiness claims.
- PASS R-37: written user design direction retained in DESIGN.md.
- PASS R-38: genuine captures, documented capabilities, clearly labeled concept and missing media.

## Purpose gate

- PASS R-01: requested brand palette; hero gradient exists to ensure text readability.
- PASS R-04: play triangle describes the demo destination; no generic decorative icon family.
- PASS R-06: fixed Arial/Helvetica sizes chosen for readable industrial documentation and local font availability.
- PASS R-07: no decorative background grid.
- PASS R-08: arrows indicate real page movement or network flow.
- PASS R-09: rectangular labels communicate prototype/concept status; no capsule or decorative live indicator.
- PASS R-10: no glassmorphism.
- PASS R-12: no decorative elevation/shadow system.
- PASS R-13: no glow.
- PASS R-14: feature rows, protocol comparisons and evidence viewer reflect different content needs.
- PASS R-19: user-requested hardware rotation is pausable, stops on interaction, respects reduced motion and avoids offscreen rendering. No unrelated animations.
- PASS R-22: the 3D board explains the hardware direction and is explicitly illustrative.

## Liveliness and craftsmanship

- PASS: ENERGY 2 / RHYTHM 3 / MOTION 1, with the user's hardware-viewer MOTION 2 exception documented.
- PASS: hero typography, evidence screenshots and interactive hardware each provide a focal point in their section.
- PASS: spacing separates evidence, architecture and research; compositions vary with content.
- PASS: restrained lime accent, original logo, industrial photography and circuit detail establish the identity.
- PASS C-1 through C-5: design decisions documented, interactions exercised, requested sections serve content, responsive states checked, claims sourced.
- PASS R-05/R-11/R-15/R-16/R-20/R-21/R-29/R-30/R-31: varied composition, restrained rectangular controls, user-requested action labels, no marketing superlatives, brand-specific imagery, light base, bounded palette, no copied commercial template, documented visual rationale.

## Remaining limits

- No demo recording exists in the supplied/discovered assets. Real video playback, caption synchronization and transcript accuracy cannot be verified. Native player support is implemented but not presented until actual media is configured.
- Touch gestures are supported by TrackballControls, but no physical touch device was available. Mouse and keyboard interactions were exercised in Chromium.
- Hardware is procedural concept geometry; physical deployment, thermal behaviour and packet capture performance have not been tested.
- The missing vulnerability capture and public contact details remain visible notices.
- No production domain was supplied; metadata and sitemap use the confirmed private hosted preview address. Noindex remains the default until a production origin is configured.
- This is a practical browser/visual check, not a claim of formal accessibility certification or cross-browser certification.
