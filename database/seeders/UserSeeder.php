<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'shreeganeshpharmatech@gmail.com'],
            [
                'name' => 'Shree Ganesh Admin',
                'password' => Hash::make('Shreeganesh@123'),
            ],
        );
    }
}
