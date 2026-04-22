<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectLegacyUrls
{
    public function handle(Request $request, Closure $next): Response
    {
        $path = '/'.ltrim($request->path(), '/');
        $map = config('redirects', []);

        if (isset($map[$path]) && $map[$path] !== $path) {
            return redirect($map[$path], 301);
        }

        // Strip trailing slash (except root) → 301 to canonical
        if ($path !== '/' && str_ends_with($path, '/')) {
            return redirect(rtrim($path, '/'), 301);
        }

        return $next($request);
    }
}
