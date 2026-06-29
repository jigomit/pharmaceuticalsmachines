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
            ->description('Latest leads from the website contact form.')
            ->columns([
                TextColumn::make('created_at')
                    ->label('Received')
                    ->timezone('Asia/Kolkata')
                    ->dateTime('d M Y, h:i A')
                    ->sortable(),
                TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->weight('semibold'),
                TextColumn::make('email')
                    ->label('Email')
                    ->copyable()
                    ->searchable()
                    ->limit(28),
                TextColumn::make('product.name')
                    ->label('Product')
                    ->placeholder('General enquiry')
                    ->limit(40)
                    ->wrap(),
                TextColumn::make('status')
                    ->label('Status')
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
