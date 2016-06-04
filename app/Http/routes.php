<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/



// API Routes.
Route::get('api/products', 'ProductController@index');
Route::get('api/products/{id}', 'ProductController@show');
Route::post('api/products/add', 'ProductController@store');
Route::put('api/products/update/{id}', 'ProductController@update');
Route::delete('api/products/destroy/{id}', 'ProductController@destroy');
Route::post('api/upload','FileUploadController@store');

// Initialize Angular.js App Route.
Route::get('/', function() {
    return view('layout');
});

Route::any('{path?}', function()
{
    return view('layout');
})->where("path", ".+");
