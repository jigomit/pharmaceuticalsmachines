# SEO production checklist

Run once when deploying to the live domain.

## Environment

```env
APP_URL=https://pharmaceuticalsmachines.com
GOOGLE_SITE_VERIFICATION=…
BING_SITE_VERIFICATION=…
GOOGLE_ANALYTICS_MEASUREMENT_ID=G-…
```

## Commands

```bash
php artisan sitemap:generate
php artisan optimize:clear
npm run build
php artisan inertia:start-ssr   # optional; improves crawl/render
```

## Google Search Console

1. Verify domain (meta tag from `GOOGLE_SITE_VERIFICATION`).
2. Submit `https://pharmaceuticalsmachines.com/sitemap.xml`.
3. Request indexing for `/`, `/products`, and top commercial landing pages.

## After deploy

Confirm `public/sitemap.xml` contains `https://pharmaceuticalsmachines.com` URLs (not localhost).
Test product search: `/products?q=vial`.
