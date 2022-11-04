import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { Questions }  from '@/Components/questions';
import { ShowResult }  from '@/Components/showResult';
import { StartQuestions }  from '@/Components/startQuestions';
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
    const [currentSituation,setCurrentSituation] = useState('beforeStart');
    const functionWithSwitch = (parameter) => {
            switch(parameter){
              case "beforeStart":
                return <StartQuestions currentSituation={currentSituation} setCurrentSituation={setCurrentSituation}/>
              case "Start":
                return <Questions props={props} showResult={showResult} setShowResult={setShowResult} correctAns={correctAns}  wrongAns={wrongAns} setCorrectAns={setCorrectAns} setWrongAns={setWrongAns} currentSituation={currentSituation} setCurrentSituation={setCurrentSituation}/>
              case "Result":
                return <ShowResult showResult={showResult} setShowResult={setShowResult} correctAns={correctAns} wrongAns={wrongAns} setWrongAns={setWrongAns} currentSituation={currentSituation} setCurrentSituation={setCurrentSituation}/>
              default:
                return <StartQuestions />
            }
          }
  const [showResult,setShowResult] = useState(false);
  const [correctAns,setCorrectAns] = useState([]);
  const [wrongAns,setWrongAns] = useState([]);




    return (
    <div>
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>


        {functionWithSwitch(currentSituation)}








        </Authenticated>
    </div>

        )

}

export default Quiz;
