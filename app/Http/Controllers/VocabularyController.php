<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use Illuminate\Http\Request;

use App\Models\Vocabulary;

class VocabularyController extends Controller
{
    public function index(Vocabulary $vocabulary)
    {
        return Inertia::render("Vocabulary/Index",["vocabularies" => $vocabulary->get()]);
    }

}
