<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('Home');
    })->name('Home');

Route::get('/Mess', function () {
    return view('Mess');
    })->name('Mess');

Route::get('/Opp', function () {
    return view('Opp');
})->name('Opp');

Route::get('/Profile', function () {
    return view('Profile');
    })->name('Profile');

Route::get('/SignIn', function () {
    return view('SignIn');
})->name('SignIn');

Route::get('/Skills', function () {
    return view('Skills');
})->name('Skills');