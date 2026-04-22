<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Product;
use App\Support\Image;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    public function run(): void
    {
        Category::all()->each(function (Category $c) {
            $c->update([
                'hero_image' => Image::forCategory($c->slug),
            ]);
        });

        Product::with('category:id,slug')->get()->each(function (Product $p) {
            $catSlug = $p->category?->slug;
            $hero = Image::forProduct($p->slug, $catSlug);

            // Optional per-product gallery override (keeps hero first).
            $override = config("images.product_gallery.{$p->slug}", []);

            // 3 supporting images = hero + 2 sibling gallery shots
            $gallery = Image::gallery();
            $extras = collect($gallery)
                ->reject(fn ($u) => $u === $hero)
                ->take(2)
                ->values()
                ->all();

            $images = array_values(array_unique(array_filter(array_merge([$hero], is_array($override) ? $override : []))));

            if (count($images) < 3) {
                $needed = 3 - count($images);
                $fallback = collect($gallery)
                    ->reject(fn ($u) => in_array($u, $images, true))
                    ->take($needed)
                    ->values()
                    ->all();
                $images = array_merge($images, $fallback);
            }

            $p->update([
                'hero_image' => $hero,
                'images' => count($images) ? $images : array_merge([$hero], $extras),
            ]);
        });

        BlogPost::all()->each(function (BlogPost $post) {
            $url = config("images.blog.{$post->slug}") ?? config('images.hero.primary');
            $post->update(['hero_image' => $url]);
        });
    }
}
