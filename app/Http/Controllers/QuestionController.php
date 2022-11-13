<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;

use App\Models\Vocabulary;
use App\Models\Question;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{
    public function quiz(Vocabulary $vocabulary)
    {


        $id = Auth::id();
        $data = Vocabulary::where('user_id', $id)->inRandomOrder()->take(30)->get();

        return Inertia::render("Vocabulary/Quiz", ["data" => $data]);
    }

    public function store(Request $request, Question $question)
    {

        $ans = $request->all();
        //dd($ans);



        $correctAns = $ans["correctAns"];
        $wrongAns = $ans["wrongAns"];


        $id = Auth::id();
        if ($correctAns !== []) {
            foreach ($correctAns as $correctAns) {

                if (is_null(Question::where([['word', $correctAns["english"]], ['user_id', $id]])->first())) {

                    $JsoncorrectAns = ["id" => $correctAns["id"], "english" => $correctAns["english"], "japanese" => $correctAns["japanese"]];
                    $JsoncorrectAns = json_encode($JsoncorrectAns, JSON_UNESCAPED_UNICODE);
                    $s = new Question();


                    $s->word = $correctAns["english"];
                    $s->correct = "correct";
                    $s->vocabulary = $JsoncorrectAns;
                    $s->user_id = $id;
                    $s->save();
                } else {
                    QUESTION::where([['word', $correctAns["english"]], ['user_id', $id]])->update(['correct' => 'correct']);
                }
            }
        }
        if ($wrongAns !== []) {

            foreach ($wrongAns as $wrongAns) {

                if (is_null(Question::where([['word', $wrongAns["english"]], ['user_id', $id]])->first())) {

                    $JsonwrongAns = ["id" => $wrongAns["id"], "english" => $wrongAns["english"], "japanese" => $wrongAns["japanese"]];
                    $JsonwrongAns = json_encode($JsonwrongAns, JSON_UNESCAPED_UNICODE);
                    $s = new Question();
                    $s->word = $wrongAns["english"];
                    $s->correct = "wrong";
                    $s->vocabulary = $JsonwrongAns;
                    $s->user_id = $id;
                    $s->save();
                } else {
                    QUESTION::where([['word', $wrongAns["english"]], ['user_id', $id]])->update(['correct' => 'wrong']);
                }
            }
        }

        $id = Auth::id();


    }
    public function result(Question $question)
    {
        $id = Auth::id();
        $ansTime = Question::where('user_id', $id)->latest('updated_at')->first(['updated_at']);
        $ansTime = json_decode($ansTime);
        $ansTime = $ansTime->updated_at;
        $split = explode("T", $ansTime ,2);
        $date = $split[0];
        $time = $split[1];

        $timeSplit = explode(".", $time ,2);
        $setTimeZone = explode(":", $timeSplit[0] ,2);
        $integer = (int)$setTimeZone[0];
        $integer = $integer + 9;
        $time = sprintf('%02d', $integer). ":" .$setTimeZone[1];


        $ansTime = $date. " ". $time;
        //dd($ansTime);


        $ans = Question::where([['user_id', $id],['updated_at', $ansTime]])->get();

        //dd($ans);




        return Inertia::render("Vocabulary/ShowResult", ["data" => $ans]);
    }

    public function detail(Vocabulary $vocabulary)
    {
        return Inertia::render("Vocabulary/DetailShowResult", ["vocabulary" => $vocabulary]);
    }
}
