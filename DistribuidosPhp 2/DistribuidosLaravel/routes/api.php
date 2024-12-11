<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\songController;

Route::middleware('api')->group(function () {
    Route::apiResource('songs', songController::class);
});
