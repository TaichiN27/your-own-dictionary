import React, { useState } from "react";
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
    const [showBotton, setShowBotton] = useState(false);
    let num = Math.floor(data.length)-3;
    const [next, setNext] = useState(true);




    const [currentQuestion, setCurrentQuestion] = useState(0);
    function arrayShuffle(array) {
        for (var i = (array.length - 1); 0 < i; i--) {

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
    const nextQuestion = currentQuestion + 3;




    const handleAnswerButtonClick = (e) => {



        if (e.target.value == data[currentQuestion].japanese) {
            setCorrectAns([...correctAns, data[currentQuestion]])
            const music = new Audio('/audios/Quiz-Buzzer02-1.mp3');
            music.play();
        } else {
            setWrongAns([...wrongAns, data[currentQuestion]])
            const music = new Audio('/audios/Quiz-Wrong_Buzzer02-1.mp3');
            music.play();
        }


        console.log(currentQuestion);

        if (currentQuestion < data.length-4 && currentQuestion <27) {
            setCurrentQuestion(nextQuestion);
            setNext(true);
            console.log(currentQuestion);


        } else {
            setNext(false);
        }





    }

    function moveToResult() {
        setCurrentSituation("beforeStart")
    }

    function show() {
        console.log("ok");
        Inertia.visit('/quiz', {
            method: 'post',
            data: {
                correctAns: correctAns,
                wrongAns: wrongAns,
            },
        });

        window.location.replace("/quiz/result")

    }



    return (
        <div>



            {next ?
                <div className="w-4/5 mt-8 text-center mx-auto">
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 }} gutterBottom>
                                Vocabulary Quiz
                            </Typography>
                            <Typography variant="h5" component="div">
                                {data[currentQuestion].english}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" spacing={2} direction="row">
                                <Button variant="contained" sx={{ "margin": "70px", "width": "180px", "height": "50px" }} onClick={handleAnswerButtonClick} value={data[currentQuestion + randomArray[0]].japanese}>{data[currentQuestion + randomArray[0]].japanese}</Button>
                                <Button variant="contained" sx={{ "margin": "70px", "width": "180px", "height": "50px" }} onClick={(e) => handleAnswerButtonClick(e)} value={data[currentQuestion + randomArray[1]].japanese}>{data[currentQuestion + randomArray[1]].japanese}</Button>
                                <Button variant="contained" sx={{ "margin": "70px", "width": "180px", "height": "50px" }} onClick={(e) => handleAnswerButtonClick(e)} value={data[currentQuestion + randomArray[2]].japanese}>{data[currentQuestion + randomArray[2]].japanese}</Button>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={moveToResult}>Quite</Button>
                        </CardActions>
                    </Card>
                </div>
                :
                <div className="text-center mt-60">
                    <Button variant="contained" onClick={show} sx={{ width: '30%', height: '100px' }}>
                        Result
                    </Button>
                </div>
            }






        </div>

    )

}
