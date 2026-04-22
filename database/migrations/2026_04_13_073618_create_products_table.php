<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('model_code')->nullable();
            $table->text('short_description');
            $table->longText('long_description')->nullable();
            $table->json('features')->nullable();
            $table->json('applications')->nullable();
            $table->json('specs')->nullable();
            $table->json('images')->nullable();
            $table->string('hero_image')->nullable();
            $table->string('video_url')->nullable();
            $table->string('datasheet_pdf')->nullable();
            $table->json('related_product_ids')->nullable();
            $table->string('meta_title')->nullable();
            $table->string('meta_description', 320)->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index(['category_id', 'is_active']);
            $table->index('is_featured');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
