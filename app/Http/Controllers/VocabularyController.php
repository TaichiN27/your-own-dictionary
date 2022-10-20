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
            /*$response = Http::withHeaders([
                'app_id' => config('services.dictionary.id'),
                'app_key' => config('services.dictionary.token')
            ])->get("https://od-api.oxforddictionaries.com:443/api/v2/entries/"  . "en-gb" . "/" . "swimming"
            );  
            
            $ans = $response->json();*/
            
            //dd($ans);
            
            
            
             
            return Inertia::render("Vocabulary/Index",["vocabularies" => $vocabulary->getPaginateByLimit()
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
            
            $data = Vocabulary::where('english', $request["english"])->first();
            
            if($data==null){
                $sentences = $ans["results"][0]["lexicalEntries"][0]["entries"][0]["senses"];
                $sentences = json_encode($sentences, true);
                $sentences = ["sentences" => $sentences];
                $pronunciations = $ans["results"][0]["lexicalEntries"][0]["entries"][0]["pronunciations"];
                $pronunciations = json_encode($pronunciations, true);
                $pronunciations = ["pronunciations" => $pronunciations];
                $input = $request->all();
                $input+=$sentences;
                $input+=$pronunciations;
                
                
                
                $vocabulary->fill($input)->save();
                return redirect("/vocabularies/".$vocabulary['id']);
                //dd($vocabulary['id']);
            } else {
                dd("Already");
            }
           
            
            
            

            
        }
        
        public function show(Vocabulary $vocabulary)
        {
            //dd(json_decode($vocabulary["pronunciations"]));
            return Inertia::render("Vocabulary/Show",["vocabulary" => $vocabulary]);

        }

        public function delete(Vocabulary $vocabulary){
            $vocabulary->delete();
            return redirect("/");
        }

}
