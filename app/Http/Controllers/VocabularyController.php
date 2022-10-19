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
                'app_id' => config('services.dictionary.id'),
                'app_key' => config('services.dictionary.token')
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
            
            $data = Vocabulary::find($request["english"]);;
            
            $sentences = $ans["results"][0]["lexicalEntries"][0]["entries"][0]["senses"];
            $sentences = serialize($sentences);
            $sentences = ["sentences" => $sentences];
            $pronunciations = $ans["results"][0]["lexicalEntries"][0]["entries"][0]["pronunciations"];
            $pronunciations = serialize($pronunciations);
            $pronunciations = ["pronunciations" => $pronunciations];
            $input = $request->all();
            $input+=$sentences;
            $input+=$pronunciations;
            
            
            dd($sentences);
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
