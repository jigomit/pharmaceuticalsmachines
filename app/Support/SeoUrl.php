<?php

namespace App\Support;

class SeoUrl
{
    public static function baseUrl(): string
    {
        $url = rtrim((string) config('seo.public_url', config('app.url')), '/');

        if (! self::isLocalHost($url)) {
            $url = preg_replace('#^http:#i', 'https:', $url) ?? $url;
        }

        return $url;
    }

    public static function isLocalHost(string $url): bool
    {
        return (bool) preg_match('#(localhost|127\.0\.0\.1|\.test)(:|/|$)#i', $url);
    }
}
