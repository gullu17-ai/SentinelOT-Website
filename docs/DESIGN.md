# SentinelOT design direction

Source: the user's explicit brief. Predominantly white, charcoal typography, restrained lime accents, deep teal actions, original undistorted logo, generous spacing and industrial photography. No invented product evidence or customer claims.

Reading this as: a public industrial security product website for technical operators and research evaluators, in a precise industrial style, dial ENERGY 2 / RHYTHM 3 / MOTION 1.

- IBM Plex Sans (self-hosted woff2, 400/500/600/700) provides engineered industrial typography with distinct personality and crisp hierarchy. IBM Plex Mono handles technical labels, protocol evidence, timestamps, and monospaced data. Sizes use a rem-based role scale with fluid clamp scaling for hero display type. Eyebrows use Plex Mono uppercase with letter-spacing for a technical instrument aesthetic.
- The hero's photographic overlay protects text contrast; the photograph situates the domain and is explicitly not a deployment image.
- Semantic tokens define a unified palette: `--surface` / `--paper` for neutral canvas, `--teal` (#084e50) for primary actions, `--dark-bg` (#0d2425) for high-contrast industrial zones, and disciplined lime tokens (`--lime` #b8cc2a on dark surfaces with > 8:1 contrast, and `--lime-ink` #485b00 on light surfaces with > 4.8:1 contrast) to guarantee full WCAG AA accessibility without color fragmentation.
- Numbered feature rows replace decorative cards. The protocol table permits direct scope/limitation comparison.
- The architecture diagram uses solid capture and dashed management separation to explain real connection differences. Arrows indicate actual flow.
- A wide screenshot viewer keeps original product evidence intact; a native modal permits full-scale inspection on narrow screens.
- No decorative animation. Only small hover transitions; reduced-motion users receive none.
- Research status labels distinguish the current prototype from roadmap work. No fake status lights, team portraits or statistics.
- User-requested CTA wording is preserved.

## Authorized interactive hardware addition

The user requested a fully rotatable Raspberry Pi 5-style 3D element and animations. Hardware section uses local Three.js geometry, physical circuit board materials, recognizable interfaces and restrained motion. It is explicitly an illustrative deployment concept, not an engineering replica or completed appliance. Hardware viewer MOTION 2 overrides the initial MOTION 1 only within this interactive region. Automatic rotation pauses on interaction, respects reduced motion and stops rendering offscreen. Mouse, touch and keyboard controls expose all orientations, zoom, flip and reset. This is the cybersecurity accent: real interface separation and circuit detail, not unrelated neon effects.
