<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Client extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function getLogoPreviewUrlAttribute(): ?string
    {
        $logo = $this->attributes['logo'] ?? null;

        if (! $logo) {
            return null;
        }

        if (filter_var($logo, FILTER_VALIDATE_URL)) {
            return $logo;
        }

        if (str_starts_with($logo, '/')) {
            return asset(ltrim($logo, '/'));
        }

        return Storage::url($logo);
    }
}
