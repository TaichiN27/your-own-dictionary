<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\VocabularyRequest;

use Inertia\Inertia;

use App\Models\Vocabulary;

use Illuminate\Support\Facades\Auth;

use \GuzzleHttp\Client;

use Illuminate\Support\Facades\Http;

class QuizController extends Controller
{
    public function quiz(Vocabulary $vocabulary){


        $id = Auth::id();
        $data = Vocabulary::where('user_id', $id)->inRandomOrder()->take(30)->get();
        //$vocabulary += $data;
        //$data=json_decode($data);


        /*$fakeAns = Vocabulary::inRandomOrder()->take(10)->get();

        //dd($data);
        $fakeAns = Vocabulary::inRandomOrder()->take(10)->get();
        $fakeAns = json_decode($fakeAns);

        //dd($fakeAns);*/







        return Inertia::render("Vocabulary/Quiz",["data"=>$data]);

    }
    public function result(Request $request){



        $ans = $request->all();


        $correctAns = $ans["correctAns"];
        foreach ($correctAns as $correctAns) {
            dd(json_encode($correctAns));
        }
        $wrongAns = json_encode($ans["wrongAns"]);
        dd($correctAns);
        $id = Auth::id();





        return Inertia::render("Vocabulary/ShowResult",["ans"=>$AnsArray]);
    }







}
