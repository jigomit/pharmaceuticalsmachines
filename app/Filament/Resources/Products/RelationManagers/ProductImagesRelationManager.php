<?php

namespace App\Filament\Resources\Products\RelationManagers;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\EditAction;

class ProductImagesRelationManager extends RelationManager
{
    protected static string $relationship = 'productImages';

    protected static ?string $title = 'Gallery Images';

    public function form(Schema $schema): Schema
    {
        return $schema->components([
            FileUpload::make('image')
                ->required()
                ->image()
                ->directory('product-gallery')
                ->maxSize(3072)
                ->imagePreviewHeight('200')
                ->columnSpanFull(),
            TextInput::make('sort_order')
                ->numeric()
                ->default(0)
                ->minValue(0),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sort_order')
                    ->label('#')
                    ->sortable(),
                ImageColumn::make('image')
                    ->label('Image'),
                TextColumn::make('created_at')
                    ->label('Uploaded')
                    ->dateTime('d M Y'),
            ])
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->headerActions([
                CreateAction::make(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
