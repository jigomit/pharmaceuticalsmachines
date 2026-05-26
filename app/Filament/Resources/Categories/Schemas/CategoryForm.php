<?php

namespace App\Filament\Resources\Categories\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class CategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Category Details')->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug($state))),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                TextInput::make('tagline')->maxLength(255),
                Textarea::make('short_description')->rows(3),
                Textarea::make('description')->rows(5)->columnSpanFull(),
                TextInput::make('icon')->maxLength(100)->helperText('Heroicon name or SVG class'),
                FileUpload::make('hero_image')
                    ->image()
                    ->directory('categories')
                    ->maxSize(2048)
                    ->imagePreviewHeight('150'),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0)
                    ->minValue(0),
                Toggle::make('is_active')->default(true),
            ])->columns(2),

            Section::make('SEO')->collapsed()->schema([
                TextInput::make('meta_title')->maxLength(255),
                Textarea::make('meta_description')->maxLength(320)->rows(3),
            ])->columns(1),
        ]);
    }
}
