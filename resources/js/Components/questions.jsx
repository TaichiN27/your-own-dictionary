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

    let showResult = props.showResult;
    let setShowResult = props.setShowResult;
    let data = props.props.data
    let numArray = [0, 1, 2]
    let correctAns = props.correctAns;
    let wrongAns = props.wrongAns;
    let setCorrectAns = props.setCorrectAns;
    let setWrongAns = props.setWrongAns;
    let currentSituation = props.currentSituation;
    let setCurrentSituation = props.setCurrentSituation





    const [currentQuestion,setCurrentQuestion] = useState(0);
    console.log(data.length);
    console.log(data.length-currentQuestion);
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

  let randomArray = arrayShuffle(numArray)


  const handleAnswerButtonClick = (e) => {
    if (e.target.value == data[currentQuestion].japanese) {
        console.log(data[currentQuestion]);
        setCorrectAns([...correctAns, data[currentQuestion]])
        console.log(correctAns);
        const music = new Audio('/audios/Quiz-Buzzer02-1.mp3');
        music.play();
        console.log(true);
    } else {
        console.log(false);
        setWrongAns([...wrongAns, data[currentQuestion]])
        const music = new Audio('/audios/Quiz-Wrong_Buzzer02-1.mp3');
        music.play();
    }
    const nextQuestion = currentQuestion + 3;

    if(nextQuestion<data.length-2){
      setCurrentQuestion(nextQuestion);
    } else {
        //alert("FINISH");
        setCurrentSituation("Result");
        console.log(currentSituation)

    }


  }

  function moveToResult() {
    setCurrentSituation("Result")
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
                  {data[currentQuestion].english}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary"  spacing={2} direction="row">
                  <Button variant="contained"  sx={{ "margin":"50px", "width":"150px", "height":"50px" }} onClick={handleAnswerButtonClick} value={data[currentQuestion+randomArray[0]].japanese}>{data[currentQuestion+randomArray[0]].japanese}</Button>
                  <Button variant="contained"  sx={{ "margin":"50px", "width":"150px", "height":"50px"  }} onClick={(e)=>handleAnswerButtonClick(e)} value={data[currentQuestion+randomArray[1]].japanese}>{data[currentQuestion+randomArray[1]].japanese}</Button>
                  <Button variant="contained"  sx={{ "margin":"50px", "width":"150px", "height":"50px"  }} onClick={(e)=>handleAnswerButtonClick(e)} value={data[currentQuestion+randomArray[2]].japanese}>{data[currentQuestion+randomArray[2]].japanese}</Button>
                </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={moveToResult}>Quite</Button>
          </CardActions>
        </Card>
        </div>





    </div>

        )

}
