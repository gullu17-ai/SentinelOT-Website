# SentinelOT public website

Next.js App Router, TypeScript and Tailwind CSS. The Product Studio redesign (15 November 2026) has separate Home, Product, Research and About pages. Static export; no database or monitoring APIs. The operational Flask project is not imported, started or connected to this website.

## Run locally

Dependencies are already installed on this computer:

```sh
cd "$HOME/Desktop/SentinelOT Website"
./start-website.sh
```

Open http://localhost:3000 . For a fresh installation, use Node.js 20.9+ and pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build and verify

```sh
node node_modules/typescript/bin/tsc --noEmit
node node_modules/next/dist/bin/next build
python3 scripts/verify-export.py
python3 -m http.server 3001 --bind 127.0.0.1 --directory out
```

The deployable static files are in `out/`. The verification helper checks internal links, anchor targets, image/script/style paths, page metadata, landmarks and the sitemap. It uses only Python's standard library.

## Pages and public content

- `/`: centered product-led hero, current dashboard interface captures, benefits and intended applications.
- `/product/`: screenshot tabs and original-resolution expansion, capabilities, protocol scope, architecture, optional 3D hardware concept and planned demo sequence.
- `/research/`: validation approach, known limitations and roadmap.
- `/about/`: team roles and direct email contact links.
- `/downloads/sentinelot-product-brief.pdf`: two-page customer/investor brief.

Public-facing roles and email mappings were approved by the user. Abdullah and Usman are primary contacts; Momin is an additional contact. There is no contact form or backend.

How it works uses the HMI, managed switch, PLC and Raspberry Pi case images from the existing FYP poster. The diagram shows a proposed physical setup, with copied capture traffic and separate management access. The current lab remains virtual; target-hardware deployment is planned. Image provenance is recorded in the asset register.

## Mobile layouts and browser verification

Mobile gallery tabs use readable two-column controls with 48px touch targets. Screenshot inspection keeps its Close control above a separately scrollable image. Short landscape menus scroll within the available viewport; dynamic viewport sizes have conventional viewport fallbacks. Page zoom remains enabled.

All four pages were checked in the in-app browser at 320px, 390px, 768px and 844px landscape, without horizontal document overflow. Menu and dialog behavior was also checked at 568 × 320. Desktop and mobile screenshots were reviewed. Actual Safari/iPhone and Android Chrome hardware verification is still pending; these checks do not establish universal browser compatibility. See `docs/VERIFICATION.md`.

## Homepage pointer effects

Fine-pointer desktops use a small SVG teal-dot/lime-ring cursor, retaining the native pointer for links and buttons. The headline types one character at a time at 65ms intervals after a 300ms lead-in, with a caret that disappears after completion. Its full accessible heading remains available, and the static exported text remains readable without JavaScript. A decorative field of up to 700 short teal/lime dashes forms a soft ring that follows the mouse, disperses outward and gently reforms. The ring drifts when the pointer leaves. Pause background freezes the scene. Canvas painting is capped at 30fps, pauses offscreen or while hidden, and caps pixel ratio at 1.5. Coarse pointers and reduced-motion settings receive the complete static headline with no decorative canvas or custom cursor. No interaction library was added.

## Homepage network animation

The homepage includes an illustrative HMI/switch/PLC network with a mirrored-traffic branch to SentinelOT. It reuses the poster equipment images and explicitly labels the flow as illustrative, not live monitoring. Small CSS signal traces animate without a rendering library, video or monitoring API. Pause/Play is keyboard accessible. Reduced-motion preferences disable the animation, and visibility observers pause it offscreen or while the document is hidden.

## Hardware and motion

A static illustrative board is shown first. Clicking Explore in 3D loads the existing Three.js concept. Mouse, touch and keyboard support turning, zooming, flipping and resetting. Auto-rotation starts paused; user controls include Pause and Static view. Rendering runs during interaction or requested rotation and pauses offscreen or when the browser tab is hidden. Pixel ratio is capped at 1.25.

This is a Raspberry Pi-inspired concept, not exact CAD or built hardware. If WebGL is unavailable, the static illustration remains. The local preview browser could not create a WebGL context, so successful rotation needs verification in a capable browser.

CSS uses short opacity/transform transitions with no ongoing decorative animation. Reduced-motion preferences remove transitions and entrance animation.

## Product brief

The ready-to-download PDF is included under `public/downloads/`. Its editable generation source is `scripts/generate-brief.py`. Regeneration requires Python with ReportLab, the DejaVu Sans font files under `/usr/share/fonts/truetype/dejavu/`, and the included genuine screenshot:

```sh
python3 scripts/generate-brief.py
```

The bundled Codex Python runtime contains ReportLab on this computer.

## Remaining media and production configuration

See `docs/ASSET-AND-EVIDENCE-REGISTER.md`. Still needed: a verified demo MP4, poster, reviewed captions/transcript and a confirmed public production domain. Team portraits are optional. All five product views now have genuine captures taken from the running dashboard on 15 November 2026, including Vulnerabilities. They show retained lab data with the Data Stale indicator preserved; this is not fresh traffic validation. Capture sources and file hashes are recorded in `docs/SCREENSHOT-CAPTURES-2026-11-15.md`.

`lib/content.ts` contains the optional `demoMedia` configuration. Enable it only after supplying all four media/transcript inputs. The player supports native playback controls, captions and transcript; no video is currently advertised as available.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the confirmed production HTTPS origin before publication. Without it, metadata uses the existing private preview origin and deliberately remains noindex. Each page has a canonical URL, sharing metadata, and inclusion in the sitemap.

## Notes

- `docs/DESIGN.md`: approved visual direction.
- `docs/REDESIGN-REVIEW.md`: original-site assessment and redesign decisions.
- `docs/VERIFICATION.md`: checks and limitations.
- The upgraded circuit monogram is reproduced from the existing FYP poster's vector source; historical dashboard screenshots preserve their original branding.
- All work stays local. Do not push or publish until explicitly requested by the user.
