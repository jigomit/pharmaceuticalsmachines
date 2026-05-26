<?php

namespace Database\Seeders;

use App\Models\ExportCountry;
use Illuminate\Database\Seeder;

class ExportCountrySeeder extends Seeder
{
    public function run(): void
    {
        $countries = [
            'USA',
            'Pakistan',
            'Afghanistan',
            'Sri Lanka',
            'Nepal',
            'Russia',
            'Thailand',
            'Iran',
            'Iraq',
            'Ukraine',
            'Dubai (UAE)',
            'Indonesia',
            'Bangladesh',
            'Egypt',
            'South Africa',
        ];

        foreach ($countries as $country) {
            ExportCountry::firstOrCreate(['country_name' => $country]);
        }
    }
}
