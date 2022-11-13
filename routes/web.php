<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\VocabularyController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['auth']], function(){
    Route::post("/vocabularies", [VocabularyController::class, "store"]);
    Route::get("/", [VocabularyController::class, "index"])->name('index');
    Route::get("/vocabularies/{vocabulary}", [VocabularyController::class, "show"]);
    Route::delete("/vocabularies/{vocabulary}", [VocabularyController::class, "delete"]);
    Route::get("/quiz/result", [QuestionController::class, "result"])->name('result');
    Route::get("/quiz", [QuestionController::class, "quiz"])->name('quiz');
    Route::post("/quiz", [QuestionController::class, "store"])->name('store');
    Route::get("/quiz/result/{vocabulary}", [QuestionController::class, "detail"]);

});




/*Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');*/

require __DIR__.'/auth.php';
