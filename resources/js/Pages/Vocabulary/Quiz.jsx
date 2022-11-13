import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Questions } from '@/Components/questions';
import { StartQuestions } from '@/Components/startQuestions';
import Authenticated from "@/Layouts/AuthenticatedLayout"
import Box from '@mui/material/Box';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const Quiz = (props) => {
    const [currentSituation, setCurrentSituation] = useState('beforeStart');
    const functionWithSwitch = (parameter) => {
        switch (parameter) {
            case "beforeStart":
                return <StartQuestions currentSituation={currentSituation} setCurrentSituation={setCurrentSituation} correctAns={correctAns} />
            case "Start":
                return <Questions props={props} showResult={showResult} setShowResult={setShowResult} correctAns={correctAns} wrongAns={wrongAns} setCorrectAns={setCorrectAns} setWrongAns={setWrongAns} currentSituation={currentSituation} setCurrentSituation={setCurrentSituation} />
            default:
                return <StartQuestions />
        }
    }
    const [showResult, setShowResult] = useState(false);
    const [correctAns, setCorrectAns] = useState([]);
    const [wrongAns, setWrongAns] = useState([]);




    return (
        <div className=" bg-[#ff4500]">
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
