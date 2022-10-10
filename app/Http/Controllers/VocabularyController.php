<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;

use App\Models\Vocabulary;

class VocabularyController extends Controller
{
        public function index(Vocabulary $vocabulary)
        {
            return Inertia::render("Vocabulary/Index",["vocabularies" => $vocabulary->get()]);
        }

}
