<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        if (! User::where('email', 'dhaval48@gmail.com')->exists()) {
            User::create([
                'name' => 'Dhaval',
                'email' => 'dhaval48@gmail.com',
                'password' => Hash::make('Tunafishm@48'),
            ]);
        }
    }
}
