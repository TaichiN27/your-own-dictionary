import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { Questions }  from '@/Components/questions';
import Authenticated from "@/Layouts/AuthenticatedLayout"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Quiz = (props) => {




 function arrayShuffle(array) {
  for(var i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    var r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
  }

  const questions =
  props.datas.map(data =>
  [
    {
      questionText:data.english,
      answerOptions:arrayShuffle([
        {answerText:data.japanese,isCorrect:true},
        {answerText:'ベクトル',isCorrect:false},
        {answerText:'2次曲線',isCorrect:false},
      ]),
    }]




  );







  const [currentQuestion,setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = () => {

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < 10){
      setCurrentQuestion(nextQuestion);
    }
  }

    return (
    <div>
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>


        <Questions props={props} />





        </Authenticated>
    </div>

        )
}

export default Quiz;
