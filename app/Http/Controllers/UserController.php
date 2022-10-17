<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
        public function index(Vocabulary $vocabulary)
        {

            return Inertia::render("Vocabulary/Index",["vocabularies" => $vocabulary->getPaginateByLimit()]);
            

        }
}
