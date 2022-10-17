<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\VocabularyRequest;

use Inertia\Inertia;

use App\Models\Vocabulary;

use Illuminate\Support\Facades\Auth;

class VocabularyController extends Controller
{
        public function index(Vocabulary $vocabulary)
        {

            return Inertia::render("Vocabulary/Index",["vocabularies" => $vocabulary->getPaginateByLimit()]);
            

        }
        

        public function store(VocabularyRequest $request, Vocabulary $vocabulary)
        {
            $input = $request->all();
            $vocabulary->fill($input)->save();
        }
        
        public function show(Vocabulary $vocabulary)
        {
            return Inertia::render("Vocabulary/Show",["vocabulary" => $vocabulary]);

        }

}
