<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\VocabularyRequest;

use Inertia\Inertia;

use App\Models\Vocabulary;

use Illuminate\Support\Facades\Auth;

use \GuzzleHttp\Client;

use Illuminate\Support\Facades\Http;


class VocabularyController extends Controller
{
        public function index(Vocabulary $vocabulary)
        {
            $response = Http::withHeaders([
                'app_id' => '9986e994',
                'app_key' => '448ea028c7536a28b8753ee1f804a078'
            ])->get("https://od-api.oxforddictionaries.com:443/api/v2/entries/"  . "en-gb" . "/" . "swimming"
            );  
            
            $ans = $response->json();
            
            //dd($ans);
            
            
            
             
            return Inertia::render("Vocabulary/Index",["vocabularies" => $vocabulary->getPaginateByLimit(),
            "anses" => $ans
            ]);
            
            

        }
        

        public function store(VocabularyRequest $request, Vocabulary $vocabulary)
        {
            
            $response = Http::withHeaders([
                'app_id' => config('services.dictionary.id'),
                'app_key' => config('services.dictionary.token')
            ])->get("https://od-api.oxforddictionaries.com:443/api/v2/entries/"  . "en-gb" . "/" . $request["english"]
            ); 
            
            $ans = $response->json();
            
            $senteces = ["senteces" => $ans["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][0]["examples"]];
            $input = $request->all();
            $input+=$senteces;
            
            $jsondata=json_encode($input, JSON_UNESCAPED_UNICODE);
            dd($jsondata);
            $vocabulary->fill($input)->save();
        }
        
        public function show(Vocabulary $vocabulary)
        {
            return Inertia::render("Vocabulary/Show",["vocabulary" => $vocabulary]);

        }

        public function delete(Vocabulary $vocabulary){
            $vocabulary->delete();
            return redirect("/");
        }

}
