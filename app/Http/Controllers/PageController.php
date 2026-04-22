<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Client;
use App\Support\Image;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function about(): Response
    {
        return Inertia::render('About', [
            'categoriesCount' => Category::where('is_active', true)->count(),
            'aboutImages' => [
                'factory' => Image::for('about.factory', 2000),
                'team' => Image::for('about.team', 1200),
                'heritage' => Image::for('about.heritage', 1200),
            ],
        ]);
    }

    public function industries(): Response
    {
        return Inertia::render('Industries', [
            'industries' => [
                ['slug' => 'pharmaceutical', 'name' => 'Pharmaceutical',       'body' => 'Complete injectable and oral solid dose lines — SVP, LVP, tablets, syrups — for Indian and global pharma manufacturers.', 'image' => Image::for('industry.pharmaceutical')],
                ['slug' => 'biotech',        'name' => 'Biotech & Biosimilars', 'body' => 'Sterile vial filling with nitrogen purging, cold-chain-ready change parts, and full containment options for biologics production.', 'image' => Image::for('industry.biotech')],
                ['slug' => 'nutraceutical',  'name' => 'Nutraceutical',         'body' => 'High-speed liquid and powder filling for nutraceutical bottles, capsules, and functional syrups.', 'image' => Image::for('industry.nutraceutical')],
                ['slug' => 'cosmetics',      'name' => 'Cosmetics & Personal Care', 'body' => 'Vacuum ointment, cream and lotion manufacturing plants with homogenisers and filling machines.', 'image' => Image::for('industry.cosmetics')],
                ['slug' => 'ayurvedic',      'name' => 'Ayurvedic / Herbal',    'body' => 'Liquid syrup plants, tablet presses, and labelling machines tailored for herbal and Ayurvedic manufacturing.', 'image' => Image::for('industry.ayurvedic')],
                ['slug' => 'veterinary',     'name' => 'Veterinary',            'body' => 'Scaled filling and packaging solutions for veterinary injectables, oral liquids, and powders.', 'image' => Image::for('industry.veterinary')],
            ],
        ]);
    }

    public function quality(): Response
    {
        return Inertia::render('Quality', [
            'heroImage' => Image::for('quality.cleanroom', 2000),
            'validationImage' => Image::for('quality.validation', 1200),
        ]);
    }

    public function clients(): Response
    {
        return Inertia::render('Clients', [
            'clients' => Client::where('is_active', true)->orderBy('sort_order')->get(),
        ]);
    }

    public function gallery(): Response
    {
        return Inertia::render('Gallery', [
            'images' => Image::gallery(1400),
        ]);
    }

    public function faq(): Response
    {
        return Inertia::render('Faq');
    }

    public function privacy(): Response
    {
        return Inertia::render('Privacy');
    }

    public function terms(): Response
    {
        return Inertia::render('Terms');
    }
}
