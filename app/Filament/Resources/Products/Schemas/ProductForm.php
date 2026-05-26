<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Basic Information')->schema([
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required()
                    ->searchable()
                    ->preload(),
                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug($state))),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                TextInput::make('model_code')
                    ->label('Model Number')
                    ->maxLength(255),
                Textarea::make('short_description')
                    ->required()
                    ->rows(3)
                    ->columnSpanFull(),
                MarkdownEditor::make('long_description')
                    ->label('Full Description')
                    ->columnSpanFull(),
            ])->columns(2),

            Section::make('Technical Details')->schema([
                KeyValue::make('specs')
                    ->label('Technical Specifications')
                    ->keyLabel('Parameter')
                    ->valueLabel('Value')
                    ->addActionLabel('Add specification')
                    ->columnSpanFull(),
                TagsInput::make('features')
                    ->placeholder('Add a feature')
                    ->columnSpanFull(),
                TagsInput::make('applications')
                    ->placeholder('Add an application')
                    ->columnSpanFull(),
            ]),

            Section::make('Media')->schema([
                FileUpload::make('hero_image')
                    ->label('Hero Image')
                    ->image()
                    ->directory('products')
                    ->maxSize(3072)
                    ->imagePreviewHeight('200'),
                FileUpload::make('datasheet_pdf')
                    ->label('Brochure PDF')
                    ->acceptedFileTypes(['application/pdf'])
                    ->directory('brochures')
                    ->maxSize(10240),
                TextInput::make('video_url')
                    ->label('Video URL')
                    ->url()
                    ->maxLength(500),
            ])->columns(2),

            Section::make('Display Settings')->schema([
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0)
                    ->minValue(0),
                Toggle::make('is_featured')
                    ->label('Featured product'),
                Toggle::make('is_active')
                    ->label('Active')
                    ->default(true),
            ])->columns(3),

            Section::make('SEO')->collapsed()->schema([
                TextInput::make('meta_title')
                    ->label('SEO Title')
                    ->maxLength(255),
                Textarea::make('meta_description')
                    ->label('SEO Description')
                    ->maxLength(320)
                    ->rows(3),
            ])->columns(1),
        ]);
    }
}
