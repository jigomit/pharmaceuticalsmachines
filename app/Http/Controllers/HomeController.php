<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Client;
use App\Models\Product;
use App\Support\Image;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Home', [
            'featured' => Product::with('category:id,name,slug')
                ->where('is_active', true)
                ->where('is_featured', true)
                ->orderBy('sort_order')
                ->limit(6)
                ->get(['id', 'category_id', 'name', 'slug', 'short_description', 'hero_image', 'model_code', 'is_featured']),
            'categories' => Category::where('is_active', true)
                ->orderBy('sort_order')
                ->limit(8)
                ->get(['id', 'name', 'slug', 'tagline', 'icon', 'hero_image']),
            'clients' => Client::where('is_active', true)->orderBy('sort_order')->get(['id', 'name', 'logo']),
            'latestPosts' => BlogPost::published()
                ->orderByDesc('published_at')
                ->limit(3)
                ->get(['id', 'title', 'slug', 'excerpt', 'hero_image', 'reading_minutes', 'category_tag', 'published_at']),
            'heroImages' => [
                'primary' => Image::for('hero.primary', 2000),
                'secondary' => Image::for('hero.secondary', 1200),
                'tertiary' => Image::for('hero.tertiary', 1200),
            ],
            'aboutImages' => [
                'factory' => Image::for('about.factory', 1600),
                'team' => Image::for('about.team', 1200),
                'heritage' => Image::for('about.heritage', 1200),
            ],
            'qualityImage' => Image::for('quality.cleanroom', 1600),
        ]);
    }
}
