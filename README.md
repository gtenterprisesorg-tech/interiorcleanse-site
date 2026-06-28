# InteriorCleanse

A static-export Next.js affiliate storefront and author site for curated TikTok Shop home-care picks and Amazon KDP books.

## Run locally

```bash
npm install
npm run dev
```

## Build static site

```bash
npm run build
```

The site uses `output: 'export'`, so GitHub Pages serves the generated `out/` directory without a Node server.

## Add a product

Edit `content/products.json`. Required fields include `slug`, `name`, `category`, `heroImage`, `gallery`, `imageAlt`, `editorialBlurb`, `tiktokShopUrl`, and `featured`. Put local images in `public/images/` and always provide accurate alt text.

## Add a book

Edit `content/books.json`. Required fields include `slug`, `title`, `coverImage`, `imageAlt`, `hook`, `bullets`, `paperbackUrl`, `kindleUrl`, and `featured`.

## Environment variables

Copy `.env.example` to `.env.local` for local testing. Because GitHub Pages is static, forms post directly to hosted endpoints such as Formspree, ConvertKit, or Mailchimp. Analytics is disabled unless a public domain/ID is configured.

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys `out/` with GitHub Pages on pushes to `main`. In GitHub repository settings, set Pages source to **GitHub Actions**.

## Launch notes

See `CONTENT_CHECKLIST.md` for all placeholder content, legal review, handle/domain checks, and real affiliate links required before launch.
