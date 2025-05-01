<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Llave primaria automática.
            $table->string('name'); // Nombre del usuario.
            $table->string('email')->unique(); // Correo único.
            // Si se tiene que implementar
            // $table->timestamp('email_verified_at')->nullable();
            $table->string('password'); // Contraseña encriptada.
            $table->timestamps(); // Incluye campos created_at y updated_at automáticamente. */
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary(); 
            $table->string('token'); 
            $table->timestamp('created_at')->nullable(); 
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary(); 
            $table->foreignId('user_id')->nullable()->index(); 
            $table->string('ip_address', 45)->nullable(); 
            $table->text('user_agent')->nullable(); 
            $table->longText('payload'); 
            $table->integer('last_activity')->index(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
