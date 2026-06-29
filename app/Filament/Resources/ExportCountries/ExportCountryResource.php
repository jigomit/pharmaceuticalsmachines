<?php

namespace App\Filament\Resources\ExportCountries;

use App\Filament\Resources\ExportCountries\Pages\CreateExportCountry;
use App\Filament\Resources\ExportCountries\Pages\EditExportCountry;
use App\Filament\Resources\ExportCountries\Pages\ListExportCountries;
use App\Models\ExportCountry;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use UnitEnum;

class ExportCountryResource extends Resource
{
    protected static ?string $model = ExportCountry::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedGlobeAlt;
    protected static ?string $navigationLabel = 'Export Countries';
    protected static string|UnitEnum|null $navigationGroup = 'Content';
    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Country')->schema([
                TextInput::make('country_name')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                FileUpload::make('flag')
                    ->image()
                    ->directory('export-flags')
                    ->maxSize(1024)
                    ->imagePreviewHeight('100'),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_active')->default(true),
            ])->columns(2),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('flag_preview_url')
                    ->label('Flag')
                    ->html()
                    ->formatStateUsing(fn (?string $state, ExportCountry $record): string => $state
                        ? sprintf(
                            '<div class="mx-auto flex h-10 w-16 items-center justify-center rounded-md bg-white p-1 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-white/10"><img src="%s" alt="%s flag" class="block max-h-7 max-w-full object-contain" loading="lazy"></div>',
                            e($state),
                            e($record->country_name),
                        )
                        : '<div class="mx-auto flex h-10 w-16 items-center justify-center rounded-md bg-slate-100 text-xs text-slate-500 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-slate-400 dark:ring-white/10">No flag</div>'
                    ),
                TextColumn::make('country_name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),
                IconColumn::make('is_active')
                    ->boolean()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Added')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
            ->defaultSort('sort_order')
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListExportCountries::route('/'),
            'create' => CreateExportCountry::route('/create'),
            'edit' => EditExportCountry::route('/{record}/edit'),
        ];
    }
}
