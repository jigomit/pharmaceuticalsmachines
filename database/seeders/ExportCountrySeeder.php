<?php

namespace Database\Seeders;

use App\Models\ExportCountry;
use Illuminate\Database\Seeder;

class ExportCountrySeeder extends Seeder
{
    public function run(): void
    {
        $countries = [
            ['country_name' => 'USA', 'flag' => '/images/flags/us.svg', 'sort_order' => 1],
            ['country_name' => 'Pakistan', 'flag' => '/images/flags/pk.svg', 'sort_order' => 2],
            ['country_name' => 'Afghanistan', 'flag' => '/images/flags/af.svg', 'sort_order' => 3],
            ['country_name' => 'Sri Lanka', 'flag' => '/images/flags/lk.svg', 'sort_order' => 4],
            ['country_name' => 'Nepal', 'flag' => '/images/flags/np.svg', 'sort_order' => 5],
            ['country_name' => 'Russia', 'flag' => '/images/flags/ru.svg', 'sort_order' => 6],
            ['country_name' => 'Thailand', 'flag' => '/images/flags/th.svg', 'sort_order' => 7],
            ['country_name' => 'Iran', 'flag' => '/images/flags/ir.svg', 'sort_order' => 8],
            ['country_name' => 'Iraq', 'flag' => '/images/flags/iq.svg', 'sort_order' => 9],
            ['country_name' => 'Ukraine', 'flag' => '/images/flags/ua.svg', 'sort_order' => 10],
            ['country_name' => 'Dubai (UAE)', 'flag' => '/images/flags/ae.svg', 'sort_order' => 11],
            ['country_name' => 'Indonesia', 'flag' => '/images/flags/id.svg', 'sort_order' => 12],
            ['country_name' => 'Bangladesh', 'flag' => '/images/flags/bd.svg', 'sort_order' => 13],
            ['country_name' => 'Egypt', 'flag' => '/images/flags/eg.svg', 'sort_order' => 14],
            ['country_name' => 'South Africa', 'flag' => '/images/flags/za.svg', 'sort_order' => 15],
        ];

        foreach ($countries as $country) {
            ExportCountry::updateOrCreate(
                ['country_name' => $country['country_name']],
                [
                    'flag' => $country['flag'],
                    'sort_order' => $country['sort_order'],
                    'is_active' => true,
                ],
            );
        }
    }
}
