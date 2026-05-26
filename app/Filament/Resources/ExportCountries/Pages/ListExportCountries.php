<?php

namespace App\Filament\Resources\ExportCountries\Pages;

use App\Filament\Resources\ExportCountries\ExportCountryResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListExportCountries extends ListRecords
{
    protected static string $resource = ExportCountryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
