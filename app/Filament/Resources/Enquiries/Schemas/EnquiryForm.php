<?php

namespace App\Filament\Resources\Enquiries\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class EnquiryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Enquiry')->schema([
                Select::make('product_id')
                    ->label('Product enquired about')
                    ->relationship('product', 'name')
                    ->searchable()
                    ->preload(),
                TextInput::make('name')->required(),
                TextInput::make('email')->email()->required(),
                TextInput::make('phone')->tel()->required(),
                TextInput::make('company'),
                TextInput::make('country'),
                Textarea::make('message')->required()->columnSpanFull()->rows(5),
            ])->columns(2),

            Section::make('Pipeline')->schema([
                Select::make('status')->options([
                    'new' => 'New',
                    'contacted' => 'Contacted',
                    'quoted' => 'Quoted',
                    'won' => 'Won',
                    'lost' => 'Lost',
                    'spam' => 'Spam',
                ])->default('new')->required(),
                DateTimePicker::make('contacted_at'),
                Textarea::make('internal_notes')->columnSpanFull()->rows(4),
            ])->columns(2),

            Section::make('Meta')->collapsed()->schema([
                TextInput::make('source_url')->disabled(),
                TextInput::make('referrer')->disabled(),
                TextInput::make('ip')->disabled(),
                TextInput::make('user_agent')->disabled(),
            ])->columns(2),
        ]);
    }
}
