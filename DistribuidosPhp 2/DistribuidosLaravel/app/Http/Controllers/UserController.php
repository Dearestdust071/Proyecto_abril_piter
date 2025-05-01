<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    // Registro de nuevos usuarios
    public function register(Request $request)
    {
        $data = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        // Envío simple de correo HTML inline
        Mail::html(
            "<h2>¡Hola {$user->name}!</h2>
             <p>Gracias por registrarte en <strong>SongVault</strong>. 🎶</p>",
            function ($message) use ($user) {
                $message
                    ->to($user->email)
                    ->subject('Bienvenido a SongVault');
            }
        );


        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'message' => 'Usuario registrado y correo enviado.',
            'token'   => $token,
            'user'    => $user,
        ], 201);
    }

    // Inicio de sesión
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        if (! Auth::attempt($credentials)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        $user  = Auth::user();
        $token = $user->createToken('authToken')->plainTextToken;


        Mail::html(
            "<h2>¡Hola de nuevo, {$user->name}!</h2>
             <p>Bienvenido de vuelta a <strong>SongVault</strong>. 🎧</p>",
            function ($message) use ($user) {
                $message
                    ->to($user->email)
                    ->subject('Bienvenido de vuelta a SongVault');
            }
        );

        return response()->json([
            'message' => 'Login exitoso.',
            'token'   => $token,
            'user'    => $user,
        ]);
    }
}
