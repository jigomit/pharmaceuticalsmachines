<?php

namespace App\Filament\Resources\ExportCountries;

use App\Filament\Resources\ExportCountries\Pages\ListExportCountries;
use App\Filament\Resources\ExportCountries\Pages\CreateExportCountry;
use App\Filament\Resources\ExportCountries\Pages\EditExportCountry;
use App\Models\ExportCountry;
use BackedEnum;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
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
            ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('#')
                    ->sortable(),
                TextColumn::make('country_name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('created_at')
                    ->label('Added')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
            ->defaultSort('country_name')
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
