<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'features' => 'array',
        'applications' => 'array',
        'specs' => 'array',
        'images' => 'array',
        'related_product_ids' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function getUrlAttribute(): string
    {
        return url("/products/{$this->category->slug}/{$this->slug}");
    }

    public function related()
    {
        if (empty($this->related_product_ids)) {
            return self::where('category_id', $this->category_id)
                ->where('id', '!=', $this->id)
                ->where('is_active', true)
                ->limit(4)
                ->get();
        }

        return self::whereIn('id', $this->related_product_ids)
            ->where('is_active', true)
            ->get();
    }
}
