<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#0B1F4B">
    <meta name="format-detection" content="telephone=yes">

    @if (config('services.seo.google_site_verification'))
        <meta name="google-site-verification" content="{{ config('services.seo.google_site_verification') }}">
    @endif
    @if (config('services.seo.bing_site_verification'))
        <meta name="msvalidate.01" content="{{ config('services.seo.bing_site_verification') }}">
    @endif

    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">

    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@500&display=swap">

    {{-- SEO head managed per-page via Inertia <Head> --}}
    @vite(['resources/js/app.ts'])
    @inertiaHead

    @if (config('services.seo.google_analytics_measurement_id'))
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('services.seo.google_analytics_measurement_id') }}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '{{ config('services.seo.google_analytics_measurement_id') }}');
        </script>
    @endif
</head>
<body class="font-body antialiased bg-white text-slate-900">
    @inertia
</body>
</html>
