<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $table = 'songs'; // Ensure the table name is explicitly set

    protected $fillable = [
        'name',
        'artist',
        'genre',
        'release_year',
        'duration',
        'creator_name',
    ];
}
