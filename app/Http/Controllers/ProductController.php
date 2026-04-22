<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProductController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Products/Index', [
            'categories' => Category::where('is_active', true)
                ->withCount(['products' => fn ($q) => $q->where('is_active', true)])
                ->orderBy('sort_order')
                ->get(['id', 'name', 'slug', 'tagline', 'short_description', 'icon', 'hero_image']),
        ]);
    }

    public function category(string $slug): Response
    {
        $category = Category::where('slug', $slug)->where('is_active', true)->firstOr(function () {
            throw new NotFoundHttpException;
        });

        return Inertia::render('Products/Category', [
            'category' => $category,
            'products' => $category->products()->where('is_active', true)->get([
                'id', 'category_id', 'name', 'slug', 'short_description', 'hero_image', 'model_code', 'is_featured',
            ]),
            'otherCategories' => Category::where('is_active', true)
                ->where('id', '!=', $category->id)
                ->orderBy('sort_order')
                ->limit(6)
                ->get(['id', 'name', 'slug', 'tagline']),
        ]);
    }

    public function show(string $categorySlug, string $productSlug): Response
    {
        $product = Product::with('category')
            ->where('slug', $productSlug)
            ->where('is_active', true)
            ->whereHas('category', fn ($q) => $q->where('slug', $categorySlug))
            ->firstOr(function () {
                throw new NotFoundHttpException;
            });

        return Inertia::render('Products/Show', [
            'product' => $product,
            'related' => $product->related()->load('category:id,slug,name')->map->only(['id', 'name', 'slug', 'short_description', 'hero_image', 'model_code', 'category']),
        ]);
    }
}
