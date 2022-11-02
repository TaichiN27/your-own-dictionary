import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { Questions }  from '@/Components/questions';
import { ShowResult }  from '@/Components/showResult';
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

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [showResult,setShowResult] = useState(false);
  const [correctAns,setCorrectAns] = useState([]);
  const [wrongAns,setWrongAns] = useState([]);


    if (showResult==true) {
        console.log(correctAns);
        console.log(wrongAns);
    }

    return (
    <div>
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>


        <Questions props={props} showResult={showResult} setShowResult={setShowResult} correctAns={correctAns}  wrongAns={wrongAns} setCorrectAns={setCorrectAns} setWrongAns={setWrongAns}/>

        <ShowResult showResult={showResult} setShowResult={setShowResult} correctAns={correctAns} wrongAns={wrongAns} setWrongAns={setWrongAns}/>





        </Authenticated>
    </div>

        )
}

export default Quiz;
