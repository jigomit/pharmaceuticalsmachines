<?php

namespace App\Support;

use Illuminate\Support\Arr;

class Image
{
    /**
     * Return a URL for the given slot. Values in config/images.php are now
     * full URLs pointing to real machinery photos on the client CDN.
     *
     * @param  string  $slot  e.g. 'hero.primary', 'category.washing-machines'
     */
    public static function for(string $slot, ?int $w = null): string
    {
        $url = Arr::get(config('images'), $slot) ?? config('images.product.default');

        return is_string($url) ? $url : (string) config('images.product.default');
    }

    /** Convenience: URL for a category slug. */
    public static function forCategory(string $slug): string
    {
        return Arr::get(config('images.category'), $slug)
            ?? config('images.product.default');
    }

    /** Convenience: URL for a product slug, with category fallback. */
    public static function forProduct(string $productSlug, ?string $categorySlug = null): string
    {
        return Arr::get(config('images.product'), $productSlug)
            ?? ($categorySlug ? self::forCategory($categorySlug) : null)
            ?? config('images.product.default');
    }

    /** Gallery image URLs. */
    public static function gallery(): array
    {
        return config('images.gallery', []);
    }
}
