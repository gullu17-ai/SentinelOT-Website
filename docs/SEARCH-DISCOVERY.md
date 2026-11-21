# Search and AI discovery

Confirmed public origin: https://sentinel-ot-website-test.vercel.app

## Verified live blockers before this change

On 21 November 2026, the public homepage returned HTTP 200, but its robots meta tag was `noindex, nofollow`. `/robots.txt` returned a blanket `Disallow: /`. Canonical URLs and the sitemap incorrectly pointed to `https://sentinelot.org`. No `X-Robots-Tag` header was present on the inspected responses.

## Implementation

- Removed the generated robots.txt route as requested. A normal 404 for this file is expected; do not replace it with a blanket denial in hosting settings.
- Production pages permit indexing and following. Vercel preview deployments, local development and `SENTINELOT_NOINDEX=1` retain noindex. These policies are independent of whether a public URL environment variable happens to be set.
- The confirmed Vercel address is the default for canonical URLs, social previews, sitemap entries and structured entity IDs. `NEXT_PUBLIC_SITE_URL` supports a future domain move.
- Four canonical pages provide meaningful titles, descriptions and server-rendered content. The product name, research status, university context, capabilities and limitations are stated explicitly.
- JSON-LD describes the project team, website, software, pages and breadcrumbs. Product FAQ markup is generated from the exact visible questions and answers. No ratings, customers, certifications, prices or deployment claims were invented. Markup does not guarantee rich results.
- `/llms.txt` is an optional plain-text factual summary with source links and limitations. It is not a crawler directive, an accepted ranking requirement, or a request for models to recommend the product.
- Existing legacy URL redirects and the four-page sitemap remain in place. Sitemap modification dates reflect this content change rather than changing on every request.

## Owner account steps after deployment

1. Add this exact HTTPS origin as a URL-prefix property in Google Search Console. The supplied Google HTML tag is included through Next.js metadata, and the supplied file is served unchanged at `/googlec43bdcdc12343dec.html`. After deploying, choose HTML tag or HTML file verification and click Verify. Keep the tag and file in place for periodic ownership checks. `GOOGLE_SITE_VERIFICATION` can override the supplied tag; Bing verification still requires a supplied `BING_SITE_VERIFICATION` value. Google Analytics is an alternative verification method and is not installed by this change.
2. Submit `https://sentinel-ot-website-test.vercel.app/sitemap.xml` in both accounts. Use their URL inspection tools to request indexing of Home, Product, Research and About.
3. Check Vercel deployment protection, any CDN firewall and bot controls. Public pages must be reachable by genuine crawlers without login or a challenge. A user-agent-only probe does not verify every crawler IP.
4. Monitor indexing, crawl errors, actual search impressions and referral traffic. An analytics account is not connected by this implementation; no volumes, rankings or AI mention scores have been measured.
5. Publish substantive new lab evidence when available. A genuine demonstration, documented protocol scope and referenced research provide more useful material than repeated keywords or fabricated testimonials. Add external project profiles only when supplied and verified.

## What this can and cannot do

SEO makes the pages easier to discover and understand. AEO/GEO here means clear, sourceable answers and consistent project identity for search and answer systems. Crawling, indexing, ranking and AI citations are distinct stages. These changes do not guarantee any stage or a delivery date. Training crawlers and search crawlers are also separate; a model's general knowledge does not update immediately after a site deployment.

Google states that its normal SEO practices apply to AI Overviews and AI Mode, with no additional special optimization requirement. OpenAI identifies OAI-SearchBot as its search crawler. Consult the current primary documentation rather than relying on crawler-name lists copied between blogs:

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OpenAI: crawler overview](https://developers.openai.com/api/docs/bots)
- [Bing: URL submission](https://www.bing.com/webmasters/help/?topicid=62f2860b)

## Verification

`node scripts/verify-indexing.cjs` checks production, preview, development and explicit opt-out policies, domain overrides and invalid configuration. After a static export, `python3 scripts/verify-export.py` verifies the four public pages, canonical origin, metadata, parseable structured data, agreement between visible FAQs and markup, linked assets, sitemap and absence of robots.txt. `--preview` checks an intentionally noindex preview export.
