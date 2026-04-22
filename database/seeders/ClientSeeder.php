<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    public function run(): void
    {
        $clients = [
            ['name' => 'Zydus Lifesciences', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Torrent Pharma', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Cadila Healthcare', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Intas Pharmaceuticals', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Claris Lifesciences', 'industry' => 'Injectables', 'country' => 'India'],
            ['name' => 'Sun Pharma', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Alkem Laboratories', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Mankind Pharma', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Biocon', 'industry' => 'Biotech', 'country' => 'India'],
            ['name' => 'Glenmark Pharma', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Lupin', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Wockhardt', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
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
