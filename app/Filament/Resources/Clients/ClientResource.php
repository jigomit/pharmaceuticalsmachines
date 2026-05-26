<?php

namespace App\Filament\Resources\Clients;

use App\Filament\Resources\Clients\Pages\CreateClient;
use App\Filament\Resources\Clients\Pages\EditClient;
use App\Filament\Resources\Clients\Pages\ListClients;
use App\Models\Client;
use BackedEnum;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Illuminate\Support\Str;
use UnitEnum;

class ClientResource extends Resource
{
    protected static ?string $model = Client::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBuildingOffice;
    protected static ?string $navigationLabel = 'Clients';
    protected static string|UnitEnum|null $navigationGroup = 'Content';
    protected static ?int $navigationSort = 2;

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Client Details')->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug($state))),
                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                FileUpload::make('logo')
                    ->image()
                    ->directory('clients')
                    ->maxSize(1024)
                    ->imagePreviewHeight('100'),
                TextInput::make('industry')->maxLength(255),
                TextInput::make('country')->maxLength(255),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_active')->default(true),
            ])->columns(2),

            Section::make('Testimonial')->collapsed()->schema([
                Textarea::make('testimonial')->rows(4)->columnSpanFull(),
                TextInput::make('testimonial_author')->maxLength(255),
                TextInput::make('testimonial_role')->maxLength(255),
            ])->columns(2),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('logo_preview_url')
                    ->label('Logo')
                    ->html()
                    ->formatStateUsing(fn (?string $state, Client $record): string => $state
                        ? sprintf(
                            '<div class="mx-auto flex h-10 w-28 items-center justify-center rounded-md bg-white p-1.5 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-white/10"><img src="%s" alt="%s logo" class="block max-h-7 max-w-full object-contain" loading="lazy"></div>',
                            e($state),
                            e($record->name),
                        )
                        : '<div class="mx-auto flex h-10 w-28 items-center justify-center rounded-md bg-slate-100 text-xs text-slate-500 ring-1 ring-gray-200 dark:bg-gray-900 dark:text-slate-400 dark:ring-white/10">No logo</div>'
                    ),
                TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('industry')
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('country')
                    ->searchable()
                    ->toggleable(),
                IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),
            ])
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
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
            'index' => ListClients::route('/'),
            'create' => CreateClient::route('/create'),
            'edit' => EditClient::route('/{record}/edit'),
        ];
    }
}
