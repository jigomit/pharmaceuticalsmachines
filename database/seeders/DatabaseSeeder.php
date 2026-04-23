<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'admin@pharmaceuticalsmachines.com'],
            ['name' => 'Kailash Admin', 'password' => bcrypt('change-me-now')],
        );

        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            ClientSeeder::class,
            BlogPostSeeder::class,
            ImageSeeder::class,
        ]);
    }
}
