<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\songController;
use App\Http\Controllers\UserController;

Route::post('user/login', [UserController::class, 'login']);
Route::post('user/register', [UserController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('songs', songController::class);
});
