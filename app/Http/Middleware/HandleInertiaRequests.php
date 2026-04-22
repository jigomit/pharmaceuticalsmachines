<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'company' => fn () => [
                'name' => config('company.name'),
                'legal_name' => config('company.legal_name'),
                'tagline' => config('company.tagline'),
                'phone' => config('company.phone'),
                'whatsapp' => config('company.whatsapp'),
                'email' => config('company.email'),
                'address' => config('company.address'),
                'hours' => config('company.hours'),
                'socials' => config('company.socials'),
            ],
            'canonical' => fn () => url($request->path() === '/' ? '' : $request->path()),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
        ];
    }
}
