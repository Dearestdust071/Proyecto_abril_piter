<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('songs', function (Blueprint $table) { 
        $table->id(); 
        $table->string('name'); 
        $table->string('artist'); 
        $table->string('genre'); 
        $table->year('release_year'); 
        $table->time('duration', 5); 
        $table->string('creator_name'); 
        $table->timestamps(); 
    });
    
    
    
}



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('songs');
    }
};
