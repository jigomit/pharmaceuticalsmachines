<?php

namespace App\Filament\Resources\ExportCountries\Pages;

use App\Filament\Resources\ExportCountries\ExportCountryResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditExportCountry extends EditRecord
{
    protected static string $resource = ExportCountryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
