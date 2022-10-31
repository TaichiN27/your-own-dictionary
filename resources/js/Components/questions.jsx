import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
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



export const Questions = (props) => {


    //console.log(props.props)

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

  //make fake answers for other 2 options
  const fakeAns = props.props.fakeAns
  console.log(fakeAns);
  let ansCheck = true;
  let ansOption = []
  function randomFakeAns(array,legitAns) {
    while(ansCheck==true) {
        if (array[Math.floor(Math.random()*array.length)].japanese == legitAns ) {
            ansCheck = true;
        } else {
            if(!(ansOption.includes(array[Math.floor(Math.random()*array.length)].japanese))  && array[Math.floor(Math.random()*array.length)].japanese!==legitAns){
                ansOption.push(array[Math.floor(Math.random()*array.length)].japanese);
                if(ansOption.length==2) {
                    ansCheck = false;
                } else {
                    ansCheck = true;
                }
            } else {
                ansCheck = true;
            }

        }
    }
  }


  const questions =
  props.props.datas.map(data => {
    let otherAns = randomFakeAns(fakeAns, data.japanese)
    console.log(otherAns);
  return(  [
    {
      questionText:data.english,
      answerOptions:[
        {answerText:data.japanese,isCorrect:true},
        {answerText:ansOption[0], isCorrect:false},
        {answerText:ansOption[1],isCorrect:false},
      ]
    }])
   }




  );

  //console.log(questions[0][0].questionText);
  //console.log(questions[0]);




  const [currentQuestion,setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = () => {

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < 10){
      setCurrentQuestion(nextQuestion);
    }
  }

    return (
    <div>



        <div className="w-4/5 mt-8 text-center mx-auto">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 30 }}  gutterBottom>
              Vocabulary Quiz
            </Typography>
                <Typography variant="h5" component="div">
                  {questions[currentQuestion][0].questionText}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary"  spacing={2} direction="row">
                  <Button variant="contained"  sx={{ "margin":"20px" }} onClick={()=>handleAnswerButtonClick()}>{questions[currentQuestion][0].answerOptions[0].answerText}</Button>
                  <Button variant="contained"  sx={{ "margin":"20px" }} onClick={()=>handleAnswerButtonClick()}>{questions[currentQuestion][0].answerOptions[1].answerText}</Button>
                  <Button variant="contained"  sx={{ "margin":"20px" }} onClick={()=>handleAnswerButtonClick()}>{questions[currentQuestion][0].answerOptions[2].answerText}</Button>
                </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </div>





    </div>

        )

}
