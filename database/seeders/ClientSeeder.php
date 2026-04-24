<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    public function run(): void
    {
        $clients = [
            ['name' => 'Zydus Lifesciences', 'logo' => '/images/brand/ZYDUS.jpeg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Torrent Pharma', 'logo' => '/images/brand/torrent-pharma.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Cadila Healthcare', 'logo' => '/images/brand/cadila-healthcare.jpg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Intas Pharmaceuticals', 'logo' => '/images/brand/Intas-Pharma.webp', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Claris Lifesciences', 'logo' => '/images/brand/claris.jpeg', 'industry' => 'Injectables', 'country' => 'India'],
            ['name' => 'Sun Pharma', 'logo' => '/images/brand/sun-pharma.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Alkem Laboratories', 'logo' => '/images/brand/alkem-laboratorie.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Mankind Pharma', 'logo' => '/images/brand/mankind-pharma.jpeg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Biocon', 'logo' => '/images/brand/Biocon_Logo.svg.png', 'industry' => 'Biotech', 'country' => 'India'],
            ['name' => 'Glenmark Pharma', 'logo' => '/images/brand/glenmark-pharma.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Lupin', 'logo' => '/images/brand/lupin-pharma.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Wockhardt', 'logo' => '/images/brand/Wockhardt-pharma.jpg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
        ];

        foreach ($clients as $i => $c) {
            Client::updateOrCreate(
                ['slug' => \Illuminate\Support\Str::slug($c['name'])],
                array_merge($c, [
                    'slug' => \Illuminate\Support\Str::slug($c['name']),
                    'sort_order' => $i,
                    'is_active' => true,
                ]),
            );
        }
    }
}
