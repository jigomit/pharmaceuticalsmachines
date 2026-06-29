<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ExportCountry extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function getFlagPreviewUrlAttribute(): ?string
    {
        $flag = $this->attributes['flag'] ?? null;

        if (! $flag) {
            return null;
        }

        if (filter_var($flag, FILTER_VALIDATE_URL)) {
            return $flag;
        }

        if (str_starts_with($flag, '/')) {
            return asset(ltrim($flag, '/'));
        }

        return Storage::url($flag);
    }
}
