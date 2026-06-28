# InteriorCleanse Content Checklist

- [ ] Final brand name + logo (locked: **InteriorCleanse**) — edit `lib/site-config.ts` and shared layout if the visual wordmark changes.
- [ ] Confirm `@interiorcleanse` availability on TikTok/Instagram and `interiorcleanse.com`/`.co`; backups: `@interiorcleanse.home`, `@theinteriorcleanse`, `@interiorcleanseco`, `@interior.cleanse`, `@cleanseinterior`.
- [ ] Domain name — update `SITE.url` in `lib/site-config.ts` and GitHub Pages settings.
- [ ] Real product list with actual TikTok Shop/video links from KaloData research — edit `content/products.json` and add owned/permitted images in `public/images/`.
- [ ] Real book titles, covers, blurbs, and live Amazon ASIN links — edit `content/books.json` and add covers in `public/images/`.
- [ ] Founder bio + photo for `/about` — edit `app/about/page.tsx`, `app/page.tsx`, and replace `public/images/founder.svg`.
- [ ] Email service provider endpoint/key — set hosted endpoints from `.env.example`; do not add secrets to the static bundle.
- [ ] TikTok Pixel ID / Meta Pixel ID if used — add public IDs only after privacy review.
- [ ] Legal pages reviewed — review `app/legal/affiliate-disclosure/page.tsx`, `app/legal/privacy-policy/page.tsx`, and `app/legal/terms/page.tsx` with a qualified professional.
- [ ] Real customer/reader testimonials with permission — add only verified quotes to product/book pages.
