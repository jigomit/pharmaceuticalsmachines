<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use App\Models\Client;
use App\Models\Enquiry;
use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class AdminOverviewStats extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $newEnquiries = Enquiry::query()->where('status', 'new')->count();

        return [
            Stat::make('Total Enquiries', (string) Enquiry::query()->count())
                ->description($newEnquiries.' new enquiries need attention')
                ->color('primary'),
            Stat::make('Active Products', (string) Product::query()->where('is_active', true)->count())
                ->description((string) Product::query()->count().' total products')
                ->color('success'),
            Stat::make('Published Blogs', (string) BlogPost::query()->published()->count())
                ->description((string) BlogPost::query()->count().' total blog posts')
                ->color('info'),
            Stat::make('Active Clients', (string) Client::query()->where('is_active', true)->count())
                ->description((string) Client::query()->count().' total clients')
                ->color('gray'),
        ];
    }
}
