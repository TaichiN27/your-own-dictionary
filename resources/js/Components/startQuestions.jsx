import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';





export const StartQuestions = ({data, currentSituation, setCurrentSituation, correctAns }) => {
    let notstart = false
    console.log(data.length);
    if (data.length<3) {
        notstart = true
    } else {
        notstart = false
    }
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
                        {notstart ?
                            <div>
                                <h1 className="text-white display-4">Sorry, you need more than 3 words on your dictionary in order to start the quiz...</h1>
                                <Button disabled variant="contained" onClick={start} sx={{ width: '30%', height: '100px' }}>Start</Button>
                            </div>
                            :
                            <Button variant="contained" onClick={start} sx={{ width: '30%', height: '100px' }}>
                            Start
                             </Button>
                        }

                    </div>
                </div>
            </div>
        </Box>
    );

}
