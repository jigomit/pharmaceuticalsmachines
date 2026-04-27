<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;




class BlogController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Blog/Index', [
            'posts' => BlogPost::published()->orderByDesc('published_at')->paginate(12),
        ]);
    }

    public function show(string $slug): Response
    {
        $post = BlogPost::published()->where('slug', $slug)->firstOr(function () {
            throw new NotFoundHttpException;
        });

        return Inertia::render('Blog/Show', [
            'post' => $post,
            'related' => BlogPost::published()
                ->where('id', '!=', $post->id)
                ->orderByDesc('published_at')
                ->limit(3)
                ->get(['id', 'title', 'slug', 'excerpt', 'reading_minutes', 'category_tag', 'published_at']),
        ]);
    }
}
