import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export const StartQuestions = ({ currentSituation, setCurrentSituation, correctAns }) => {

    function start() {
        const music = new Audio('/audios/Quiz-Question01-1.mp3');
        music.play();
        setCurrentSituation("Start")
    }

    return (
        <Box sx={{ '& button': { m: 1 } }} className="bg-[#ff4500]" >

            <div>
                <div className="container mt-30">
                    <div className="text-center mt-60">
                        <h1 className="text-white display-4">Let's challenge the quiz!!</h1>
                    </div>
                    <div className="text-center mt-20">
                        <Button variant="contained" onClick={start} sx={{ width: '30%', height: '100px' }}>
                            Start
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );

}
