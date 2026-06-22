<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ClientSeeder extends Seeder
{
    public function run(): void
    {
        $clients = [
            ['name' => 'Zydus Cadila', 'logo' => '/images/brand/Zydus-Cadila.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Zephyr Pharmaceuticals', 'logo' => '/images/brand/zephyr.jpg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Zen Pharma', 'logo' => '/images/brand/zenPharma.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Zee Laboratories', 'logo' => '/images/brand/zee-logo.webp', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Vins Bioproducts', 'logo' => '/images/brand/vins.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Veritas', 'logo' => '/images/brand/veritas_comapny_logo.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'United Biotech', 'logo' => '/images/brand/united_biotech.jpeg', 'industry' => 'Biotech', 'country' => 'India'],
            ['name' => 'Tulip Group', 'logo' => '/images/brand/TulipGroup.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Intas Pharmaceuticals', 'logo' => '/images/brand/Intas-Pharma.webp', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Sigma Laboratories', 'logo' => '/images/brand/sigma_laboratories_pvtltd_logo.jpeg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Sanjar Pharma', 'logo' => '/images/brand/sanjar_pharma.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Sai Parenterals', 'logo' => '/images/brand/sai-parenterals.png', 'industry' => 'Injectables', 'country' => 'India'],
            ['name' => 'PerkinElmer', 'logo' => '/images/brand/PerkinElmer_Logo.svg', 'industry' => 'Life Sciences', 'country' => 'Global'],
            ['name' => 'Montage Laboratories', 'logo' => '/images/brand/montage.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Molbio', 'logo' => '/images/brand/molbio.png', 'industry' => 'Diagnostics', 'country' => 'India'],
            ['name' => 'Maiva', 'logo' => '/images/brand/maiva.jpeg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Maan Pharmaceuticals', 'logo' => '/images/brand/Maan-Logo.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Laborate Pharmaceuticals', 'logo' => '/images/brand/laborate.jpeg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Konis', 'logo' => '/images/brand/konis.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Ipca Laboratories', 'logo' => '/images/brand/Ipca_Labs_logo.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Gracure Pharmaceuticals', 'logo' => '/images/brand/gracure_pharmaceuticals_ltd__logo.jpeg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Dabur', 'logo' => '/images/brand/Dabur_Logo.svg.png', 'industry' => 'FMCG & Pharma', 'country' => 'India'],
            ['name' => 'Bharat Serums & Vaccines', 'logo' => '/images/brand/bharat_comany_logo.png', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
            ['name' => 'Ajanta Pharma', 'logo' => '/images/brand/ajanta-pharma.jpg', 'industry' => 'Pharmaceuticals', 'country' => 'India'],
        ];

        $slugs = [];

        foreach ($clients as $i => $c) {
            $slug = Str::slug($c['name']);
            $slugs[] = $slug;

            Client::updateOrCreate(
                ['slug' => $slug],
                array_merge($c, [
                    'slug' => $slug,
                    'sort_order' => $i,
                    'is_active' => true,
                ]),
            );
        }

        Client::whereNotIn('slug', $slugs)->update(['is_active' => false]);
    }
}
