# Product Studio redesign verification

15 November 2026. Work performed only in the public website checkout. No GitHub push or publication.

## Build and static export

- Next.js production build and its TypeScript check pass.
- Home, Product, Research and About are exported as static pages.
- `python3 scripts/verify-export.py` passes: four pages and 121 local link/asset references, including section anchors, page metadata, canonical URLs, social images, page landmarks and sitemap.
- Social preview is generated with the upgraded circuit monogram.
- Product brief is two pages and contains all three approved email addresses. Both rendered pages were visually reviewed; the screenshot caption is outside the capture.
- `git diff --check` passes.

## Browser checks

Checked the production static export at http://localhost:3001 in the Codex in-app browser.

- Desktop homepage reviewed: centered headline, genuine screenshot stage, correct circuit monogram and restrained brand palette.
- Mobile homepage, Product, Research and About reviewed at 390px. All four pages additionally checked at 320px; no horizontal document overflow.
- Mobile navigation opens, follows Product/About links and closes after navigation.
- Escape closes the mobile menu and restores focus to its toggle.
- Genuine screenshot assets load. Cached-image loading state is fixed by checking the loaded image on mount.
- Mouse selection and ArrowRight switch screenshot tabs.
- Original-resolution modal opens with Enter; Escape closes it and restores focus to Expand screenshot.
- Research disclosure opens to reveal dataset boundaries.
- All three approved mailto addresses appear under the correct names, with Abdullah and Usman identified as primary contacts.
- Hardware initially renders a static concept without a WebGL canvas. The 3D library loads only after the visitor requests it.
- The preview browser cannot create a WebGL context (virtual Mesa/ANGLE context creation error). The static fallback was successfully verified; rotation, zoom and flip could not be verified in this browser.
- The public website does not connect to monitoring APIs.

## Accessibility and motion

- One main landmark and one H1 per public page, skip link, current-page navigation, visible focus styles and labeled screenshot dialog.
- Native keyboard-operable tabs, modal, disclosure elements and buttons.
- Reduced-motion CSS removes entrance animation and transitions. Hardware starts paused, with optional rotation and a Static view control.
- Representative authored palette measurements: primary text on white 14.38:1; body text on white 5.81:1; white on deep teal 11.74:1; lime statement text on deep teal 8.02:1. Muted screenshot captions were darkened after the first check. The large bold OT wordmark uses an olive accent at 3.67:1 on white.
- Original dashboard screenshot colors and text are preserved. A screenshot can be expanded for readable detail on small screens.
- Hardware caps pixel ratio at 1.25 and schedules frames only during interaction or requested rotation. Hidden-tab and offscreen checks pause rendering. These lifecycle controls were reviewed in source; live WebGL execution remains a verification limit.

## Remaining assets and limitations

1. Verified FUXA demonstration MP4 plus poster, reviewed WebVTT captions and transcript. Playback and caption synchronization cannot be checked before these exist.
2. Confirmed production domain. Existing private-preview metadata and noindex remain until configured.
3. Verify 3D interaction in a WebGL-capable browser and touch gestures on physical hardware.
4. Team portraits are optional; no fabricated photographs are used.

## Current screenshot update

Five genuine JPEG screenshots were captured from the already-running local Flask dashboard on 15 November 2026. The vulnerability panel now has evidence instead of the missing-capture state. The gallery and demo still use the new images, with updated intrinsic dimensions, alt text and retained-data captions. The PDF's screenshot and layout were updated for the 16:9 capture. Data Stale labels and historical records are preserved. No monitoring-project source or configuration was changed for this capture.

The rebuilt export and its TypeScript check pass, as do the 121-reference export check and diff whitespace check. All five gallery tabs were exercised and each new image loaded at its actual 1280 × 720 dimensions. Vulnerability expansion and Escape close work. At 390px, the new gallery image loads with the retained-data caption and no horizontal page overflow. The updated PDF was rendered and its revised first-page layout visually reviewed; the second-page content is unchanged.

## Poster equipment diagram update

How it works now includes the four original poster equipment images: HMI, managed switch, PLC and Raspberry Pi case. File hashes match the supplied poster assets. All four images load in the browser; the desktop and 390px mobile layouts were visually inspected. The 320px and 390px layouts have no horizontal document overflow. The diagram keeps mirrored capture traffic separate from management access and identifies the Pi hardware as planned. The final static export check now covers 125 local references. No application or poster source was changed, and no GitHub push or publication was performed.

This is practical layout and interaction verification, not formal accessibility certification, cross-device certification or evidence of production readiness.

## Poster appliance layout refinement

The How it works diagram now follows the FYP poster appliance grouping: Passive Monitoring, Asset Discovery, Rule-Based Detection, ML Anomaly Detection, Offline Vulnerability Assessment, and Alerting & Reporting. The previous Zeek, Evidence pipeline and Local dashboard diagram boxes are removed. ML is marked Roadmap and Raspberry Pi 5 hardware is marked planned. Capture and management separation remain explained below the diagram.

The production build and TypeScript validation pass; the static export checker validates 126 local references. Desktop and 390px mobile screenshots were visually reviewed. All five diagram images load, and the mobile document has no horizontal overflow. Changes remain local; nothing was pushed or published.

## Laptop dashboard addition

Added the poster-style Local Security Dashboard beneath the appliance, using a lightweight CSS laptop frame and the genuine 15 November asset inventory capture. The connection is labeled Separate management connection. A keyboard-accessible link leads to the full dashboard gallery. Desktop appearance and image loading were visually verified; mobile width was checked at 390px with no horizontal overflow. Production build, TypeScript, 128-reference export validation and diff whitespace checks pass. Nothing was pushed or published.

## Mobile refinement and compatibility checks — 15 November 2026

- Gallery tabs now form a readable two-column layout with 12px text and 48px targets; the fifth tab spans the row. Compact screenshot expansion has a 44px target, and retained-data captions are 11px.
- The screenshot dialog is centered, has a dynamic viewport height limit with a conventional viewport fallback, and keeps its heading and Close control outside the scrolling image area. Horizontal inspection is contained within the image. Short landscape menus scroll within the viewport.
- Tablet appliance hardware and modules stack before they become cramped. Mobile roadmap status moves below its item instead of squeezing the heading. Equipment captions and hardware controls use larger text. Browser text adjustment is explicit while viewport zoom remains enabled.
- The fresh production CSS was confirmed in the browser; cached HTML from an earlier build was bypassed for these checks.
- Home, Product, Research and About were checked at 320 × 740, 390 × 844, 768 × 1024 and 844 × 390. No document overflow or offscreen content was found in the measured headings, copy, links, buttons or appliance/laptop containers.
- At 390px, mobile menu open/Escape close, vulnerability tab selection, screenshot expansion and Close passed. The native dialog uses the new flex layout; its Close control remains visible and the image scrolls within the dialog.
- At 568 × 320, the menu ends at the viewport edge and its overflowing links remain in a scrollable region. The screenshot dialog is 288px high with a visible Close button and a 152px image inspection area.
- Fresh desktop/mobile screenshot review includes the equipment diagram and laptop, Home, Research and About. Build, TypeScript, 128-reference export validation and whitespace checks pass.

Verification scope: the Codex in-app browser on this Linux machine. Actual Safari/iOS, Android Chrome touch gestures, browser text enlargement and physical WebGL interactions remain device checks; no Safari execution or universal compatibility is claimed. Changes have not been pushed or published.

## Explicit Home navigation

Added Home as the first header navigation link (desktop and mobile) and in the footer. The logo still links to the homepage. Verified navigation from Product to Home, the homepage active indicator, and mobile menu closing after Home selection. Production build, TypeScript, 136-reference export validation and whitespace checks pass. No GitHub push was performed.

## Homepage industrial network animation

Added the approved HMI–managed switch–PLC traffic illustration above the homepage screenshot gallery, with a separate mirrored-traffic branch to SentinelOT. Original poster equipment images and the circuit monogram are reused. The caption explicitly identifies an illustrative flow, not live monitoring. There is no monitoring API, video, WebGL or additional animation library in this component.

Verified all four images load; all five CSS signal traces run and Pause changes each to paused. Play resumes the illustration. Scrolling to the end of the page was verified to pause the offscreen animation through IntersectionObserver. Document visibility and reduced-motion preference handling were reviewed in source; the global reduced-motion CSS also disables the animations. The control has a 44px touch target. Desktop and mobile screenshots were reviewed, with no horizontal document overflow at 320px, 390px or 768px. Oversized source image contents are intentionally clipped within equipment frames. Physical iPhone/Safari execution remains unverified.

Production build, TypeScript and the 141-reference export check pass. No GitHub push or publication was performed.

## Hero cursor, text reveal and scatter effect

Implemented the approved fine-pointer cursor and background-dot scatter option. The headline uses staggered character spans (100ms to 1002ms start delays, 300ms reveal) without shifting word layout; its complete accessible heading label is available immediately. Desktop fine pointers get a teal-dot/lime-ring SVG cursor, while links retain the native hand pointer. No cursor-tracking layer or external library is used.

The decorative canvas contains 72 dots and responds to mouse input near the pointer. It schedules frames only until dots settle, caps pixel ratio at 1.5, and cancels frames when offscreen, hidden or unmounted. Coarse-pointer and reduced-motion preferences hide the canvas, avoid allocating a full-size backing surface and disable character animation. These preference and lifecycle paths were reviewed in source; actual touch and reduced-motion device execution remains unverified.

In the in-app browser, verified the custom cursor CSS, staggered reveal delays, full heading accessibility label, all characters reaching full opacity, and pointer-region screenshot changes after a real mouse click in the intro. Reviewed desktop and narrow-viewport screenshots; no horizontal document overflow at 320px, 390px and 768px. Viewport resizing emulates size only and does not establish mobile pointer capability or Safari behavior. Production build, TypeScript, 141-reference export check and whitespace checks pass. Nothing was pushed or published.

## Reference-based sequential typewriter refinement

Inspected the supplied https://antigravity.google/ homepage and its visible typed heading/caret structure. SentinelOT now uses discrete sequential typing rather than overlapping character fades: a 300ms lead-in, one character every 65ms, and a temporary caret at the latest character. The final caret disappears after 600ms. No source code, fonts, logos or images were copied from the reference.

A small client timer controls the sequence and cleans up on unmount or pointer/motion preference changes. The exported text and accessible heading are complete; reduced-motion and coarse-pointer visitors keep the static headline. The existing cursor and scatter interaction are retained. The build, TypeScript, 141-reference export validation and whitespace checks pass. Nothing was pushed or published.

Browser verification captured an in-progress prefix with one active caret, followed by all 42 non-space characters revealed with zero active carets. Final heading has no horizontal overflow. Progress and completion screenshots were saved.

## Reference-inspired ring dispersion

Replaced the sparse 72-dot intro grid with a deterministic, jittered field of up to 700 short teal/lime dashes. A soft ring follows the mouse with radial displacement and curl, then drifts gently when the pointer leaves. This is an independent Canvas 2D approximation of the supplied Antigravity reference's ring interaction, not its WebGL implementation or copied shader. The reference DOM and public particle module were inspected; its WebGL field did not render in this preview environment, so pixel-identical comparison was not possible.

The new background paints at most 30fps and caps pixel ratio at 1.5. Pause background freezes rendering; Play background resumes. Hidden/offscreen/preference cleanup remains in place. Coarse pointers and reduced-motion preferences receive no canvas or background control. These device preference paths were reviewed in source, not emulated as physical touch/Safari execution.

Verified pointer response in the browser and visually reviewed the active ring. Two paused hero screenshot regions were pixel-identical even after pointer movement; resume restores the control state. Final 320px, 390px and 768px layouts have no document overflow, with 44px background controls clear of the header. Production build, TypeScript, the 141-reference export validation and whitespace checks pass. Nothing was pushed or published.

## Crawlability and search/AI discovery — 21 November 2026

The supplied live origin was confirmed as https://sentinel-ot-website-test.vercel.app. Before this change, its homepage returned noindex/nofollow, its robots.txt disallowed all crawlers, and canonicals/sitemap incorrectly referenced sentinelot.org. Removed the robots route at the owner's explicit request, fixed the canonical origin, enabled production indexing and retained preview/development opt-outs. Added research-project, website, software, page and breadcrumb JSON-LD, visible product questions with matching FAQ markup, optional plain-text project facts, and owner-supplied verification-token hooks.

Production export, TypeScript, indexing-policy checks and 143-reference export validation pass. Validation includes exact canonical/sitemap origin, parseable JSON-LD, agreement between visible FAQ text and structured answers, working source links and the absence of robots.txt. Local HTTP checks return 200 for all four pages, the sitemap and plain-text facts; robots.txt returns 404. Browser review confirms product metadata, all five questions and responsive rendering at 390px without horizontal overflow. FAQs expand normally. Screenshots are saved under ignored tmp/qa.

The initial build stopped with a Next.js security advisory; its requested retry completed. The official npm advisory endpoint confirms moderate advisories affecting installed Next.js 16.4.3 through 16.4.4; 16.4.5 is available as a fixed patch. Dependency upgrades were not included in this SEO change and remain recommended. Search Console/Bing account verification and sitemap submission remain owner-account actions; no ranking, indexing success or AI citations are claimed. See docs/SEARCH-DISCOVERY.md.
