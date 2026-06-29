<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('export_countries', function (Blueprint $table) {
            $table->string('flag')->nullable()->after('country_name');
            $table->unsignedInteger('sort_order')->default(0)->after('flag');
            $table->boolean('is_active')->default(true)->after('sort_order');
        });
    }

    public function down(): void
    {
        Schema::table('export_countries', function (Blueprint $table) {
            $table->dropColumn(['flag', 'sort_order', 'is_active']);
        });
    }
};
