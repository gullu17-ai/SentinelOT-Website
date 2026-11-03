# SentinelOT public website

Next.js App Router, TypeScript and Tailwind CSS. Static export, separate from the existing Flask monitoring project. No database, monitoring API, authentication or contact backend is needed. All displayed product evidence is static. The Flask project is not imported or run.

## Run

Requires Node.js 20.9+ and pnpm (or npm).

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000 . To use npm, run `npm install` then `npm run dev` instead; pnpm-lock.yaml is the reproducible dependency lock.

```sh
pnpm typecheck
pnpm build
pnpm preview
```

The deployable static files are in `out/`. Serve this directory from a separate public static host. Do not expose the Flask server or operational network to host this website.

## Public URL

Copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_SITE_URL` to the real production HTTPS origin, then rebuild. Without an override, metadata uses the private hosted preview and `noindex` intentionally keeps the draft from being indexed. Sitemap and robots.txt are generated at build time. Social image is generated locally at `/social-preview.png`.

## Content and missing media

See `docs/ASSET-AND-EVIDENCE-REGISTER.md` for sources and the remaining assets. `lib/content.ts` contains the screenshot list and optional demo configuration. Only enable `demoMedia` after supplying all four items: local MP4 path, poster image path, WebVTT captions path and reviewed transcript text. The player uses native controls, no autoplay, no loop and inline playback; it requires no custom pause button because browser controls include pause. Validate actual playback and caption timing after adding media.

To add the vulnerability capture, place the genuine image in `public/media/`, then update the corresponding view's image and alt text. To add contact, replace the notice with the approved address and a real mailto link; there is intentionally no form pretending to send messages.

## Accessibility and layout

Skip link, landmark headings, keyboard tabs with arrows/Home/End, native modal with Escape and focus restoration, visible focus, responsive layouts, reduced motion, image load/error states and original-resolution screenshot inspection. Historic screenshots are complex images with surrounding text descriptions and an expansion control; their original typography is not redesigned.

## Project notes

- `docs/DESIGN.md`: design rationale and Anti Slop direction.
- `docs/ASSET-AND-EVIDENCE-REGISTER.md`: asset provenance and claim boundaries.
- `docs/VERIFICATION.md`: actual checks and remaining limits.

## Interactive hardware

The Raspberry Pi 5-inspired concept is original simplified geometry in `lib/hardware-scene.ts`, lazy-loaded by `components/Hardware.tsx`. Drag in any direction, scroll/pinch to zoom, or use the arrow keys, +/− and R. Buttons provide flip, reset, pause and automatic rotation. The visible model is illustrative, not exact CAD or a completed appliance. Reduced motion starts rotation paused, interaction pauses it, and rendering is suspended offscreen.

On this computer, dependencies are installed. You can also run `./start-website.sh` from this folder.
