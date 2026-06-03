<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Public site URL (SEO / sitemap / JSON-LD)
    |--------------------------------------------------------------------------
    |
    | Canonical origin for sitemaps and structured data. Defaults to APP_URL.
    | On production set APP_URL (or SEO_PUBLIC_URL) to your live HTTPS domain,
    | e.g. https://pharmaceuticalsmachines.com
    |
    */

    'public_url' => env('SEO_PUBLIC_URL', env('APP_URL', 'http://localhost')),

    'google_site_verification' => env('GOOGLE_SITE_VERIFICATION'),
    'bing_site_verification' => env('BING_SITE_VERIFICATION'),
    'google_analytics_measurement_id' => env('GOOGLE_ANALYTICS_MEASUREMENT_ID'),

];
