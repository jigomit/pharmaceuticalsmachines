<?php

namespace App\Filament\Resources\Enquiries\Pages;

use App\Filament\Resources\Enquiries\EnquiryResource;
use Filament\Resources\Pages\EditRecord;

class EditEnquiry extends EditRecord
{
    protected static string $resource = EnquiryResource::class;

    public function getTitle(): string
    {
        return 'View Enquiry';
    }

    protected function getHeaderActions(): array
    {
        return [];
    }

    protected function getFormActions(): array
    {
        return [];
    }

    public function isReadOnly(): bool
    {
        return true;
    }

    protected function getSavedNotificationTitle(): ?string
    {
        return null;
    }
}
