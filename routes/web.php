<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Routes du portfolio
|--------------------------------------------------------------------------
*/

// Page principale
Route::get('/', [PortfolioController::class, 'index'])->name('portfolio');

// Formulaire de contact
Route::post('/contact', [PortfolioController::class, 'contact'])->name('contact');

Route::post('/contact', [App\Http\Controllers\ContactController::class, 'send']);