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
            return Inertia::render("Vocabulary/Index",["vocabularies" => $vocabulary->getPaginateByLimit()
            ]);



        }


        public function store(VocabularyRequest $request, Vocabulary $vocabulary)
        {


            $id = Auth::id();

            $data = Vocabulary::where([['english', $request["english"]], ['user_id', $id]])->first();


            $user = Vocabulary::where('user_id', $id)->first();

            //dd($data);

            if($data==null){
                $response = Http::withHeaders([

                    'app_id' => config('services.dictionary.id'),
                    'app_key' => config('services.dictionary.token')
                ])->get("https://od-api.oxforddictionaries.com:443/api/v2/entries/"  . "en-gb" . "/" . $request["english"]
                );



                $ans = $response->json();

                if(!(isset($ans['error']))) {
                $sentences = $ans["results"][0]["lexicalEntries"][0]["entries"][0]["senses"];
                $sentences = json_encode($sentences, true);
                $sentences = ["sentences" => $sentences];
                $pronunciations = $ans["results"][0]["lexicalEntries"][0]["entries"][0]["pronunciations"];
                $pronunciations = json_encode($pronunciations, true);
                $pronunciations = ["pronunciations" => $pronunciations];
                $lexicalCategory = $ans["results"][0]["lexicalEntries"][0]["lexicalCategory"];
                $lexicalCategory = json_encode($lexicalCategory, true);
                $lexicalCategory = ["lexicalCategory" => $lexicalCategory];
                $input = $request->all();
                $input+=$sentences;
                $input+=$pronunciations;
                $input+=$lexicalCategory;




                $vocabulary->fill($input)->save();
                return redirect("/vocabularies/".$vocabulary['id']);
                } else {
                    return redirect('/')->with('message', 'This word was not found in the dictionary.');
                }


            } else {
                return redirect("/vocabularies/".$data['id'])->with('message', 'Already registered.');
            }






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
