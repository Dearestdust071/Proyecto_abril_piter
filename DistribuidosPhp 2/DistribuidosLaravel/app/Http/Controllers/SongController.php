<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class SongController extends Controller
{
    public function index()
    {
        return Song::all();
    }

    public function store(Request $request)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'artist' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'release_year' => 'required|integer|min:1|max:' . date('Y'),
            'duration' => ['required', 'regex:/^([0-5][0-9]):([0-5][0-9])$/'],
            'creator_name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            Log::info('Validation Errors: ', $validator->errors()->toArray());
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 400);
        }

        try {
            // Crear una nueva canción
            $song = Song::create($request->all());
            return response()->json([
                'status' => 'success',
                'message' => 'Song created successfully',
                'song' => $song
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creating song: ', ['exception' => $e]);
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create song',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $song = Song::findOrFail($id);
            return response()->json(
                $song
            );
        } catch (\Exception $e) {
            Log::error('Error fetching song: ', ['exception' => $e]);
            return response()->json([
                'status' => 'error',
                'message' => 'Song not found',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'artist' => 'sometimes|required|string|max:255',
            'genre' => 'sometimes|required|string|max:255',
            'release_year' => 'sometimes|required|integer|min:1900|max:' . date('Y'),
            'duration' => ['required', 'regex:/^([0-5][0-9]):([0-5][0-9])$/'],
            'creator_name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            Log::info('Validation Errors: ', $validator->errors()->toArray());
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 400);
        }

        try {
            $song = Song::findOrFail($id);
            $song->update($request->all());
            return response()->json([
                'status' => 'success',
                'message' => 'Song updated successfully',
                'song' => $song
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error updating song: ', ['exception' => $e]);
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update song',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $song = Song::findOrFail($id);
            $song->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Song deleted successfully'
            ], 204);
        } catch (\Exception $e) {
            Log::error('Error deleting song: ', ['exception' => $e]);
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete song',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
