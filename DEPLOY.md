# Kailash Machine Tools — Deploy Notes

## One-time production setup

```bash
composer install --no-dev --optimize-autoloader
npm ci
npm run build
npm run build -- --ssr
php artisan key:generate
php artisan migrate --force
php artisan db:seed --force
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan sitemap:generate
```

## .env production values

```
APP_ENV=production
APP_DEBUG=false
APP_URL=https://pharmaceuticalsmachines.com

DB_CONNECTION=mysql
DB_HOST=...
DB_DATABASE=...
DB_USERNAME=...
DB_PASSWORD=...

MAIL_MAILER=smtp
MAIL_HOST=smtp.zoho.in          # or smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=info@pharmaceuticalsmachines.com
MAIL_PASSWORD=...
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=info@pharmaceuticalsmachines.com
MAIL_FROM_NAME="Kailash Machine Tools"
```

## SSR process (recommended: PM2)

```bash
pm2 start "node bootstrap/ssr/ssr.js" --name kmt-ssr
pm2 save
pm2 startup
```

Inertia will auto-detect the running SSR process on `http://127.0.0.1:13714` and forward requests. Set `INERTIA_SSR_ENABLED=true` in `.env` (default is enabled when SSR build exists).

## Scheduler

Cron entry for `spatie/laravel-sitemap` daily regeneration:
```
* * * * * cd /path/to/app && php artisan schedule:run >> /dev/null 2>&1
```

## First admin user

Default seeded admin: **admin@pharmaceuticalsmachines.com** / **change-me-now**
Log in at `/admin` and change the password immediately.

## Search Console / indexing checklist

1. Add `https://pharmaceuticalsmachines.com` property in Google Search Console.
2. Submit `/sitemap.xml`.
3. Request indexing on Home, About, Products, one Category, one Product, FAQ.
4. Run **Rich Results Test** on Home (Organization + LocalBusiness), one Product (Product + BreadcrumbList), FAQ (FAQPage), one Blog post (Article).
5. Add Google Business Profile at factory address (Vatva, Ahmedabad) and link to site.
6. Submit to Bing Webmaster Tools.
7. List site in IndiaMart, TradeIndia, ExportersIndia with links back.

## 301 Redirects

Legacy Shree Ganesh URLs are mapped in `config/redirects.php` and handled by `App\Http\Middleware\RedirectLegacyUrls`. Add new patterns there — no deployment code changes needed, just clear cache.

## Performance

- Enable HTTP/2 + Brotli at the edge (Nginx/Cloudflare).
- Cache static assets for 1 year (`Cache-Control: public, max-age=31536000, immutable`).
- Cache `/sitemap.xml` and `/robots.txt` for 1 hour.
- Lighthouse targets: Performance ≥ 90, SEO = 100, Accessibility ≥ 95, Best Practices ≥ 95.
