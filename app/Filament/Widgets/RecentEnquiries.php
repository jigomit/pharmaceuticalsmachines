<?php

namespace App\Filament\Widgets;

use App\Models\Enquiry;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;

class RecentEnquiries extends TableWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Enquiry::query()->latest('created_at')->limit(8)
            )
            ->heading('Recent Enquiries')
            ->description('Latest inbound enquiries from your website contact form.')
            ->columns([
                TextColumn::make('created_at')
                    ->label('Received')
                    ->timezone('Asia/Kolkata')
                    ->dateTime('d M Y, h:i A'),
                TextColumn::make('name')
                    ->searchable()
                    ->weight('bold'),
                TextColumn::make('email')
                    ->copyable()
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('product.name')
                    ->label('Product')
                    ->placeholder('General enquiry')
                    ->toggleable(),
                TextColumn::make('status')
                    ->badge()
                    ->colors([
                        'primary' => 'new',
                        'gray' => 'contacted',
                        'warning' => 'quoted',
                        'success' => 'won',
                        'danger' => ['lost', 'spam'],
                    ]),
            ]);
    }
}
