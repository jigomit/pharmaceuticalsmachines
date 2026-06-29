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
                ->description($newEnquiries.' new need attention')
                ->color('primary'),
            Stat::make('Active Products', (string) Product::query()->where('is_active', true)->count())
                ->description(Product::query()->count().' total in catalogue')
                ->color('success'),
            Stat::make('Published Blogs', (string) BlogPost::query()->published()->count())
                ->description(BlogPost::query()->count().' posts in library')
                ->color('info'),
            Stat::make('Active Clients', (string) Client::query()->where('is_active', true)->count())
                ->description(Client::query()->count().' client logos')
                ->color('gray'),
        ];
    }
}
