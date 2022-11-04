import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export const StartQuestions = ({currentSituation, setCurrentSituation}) => {

    function start() {
        const music = new Audio('/audios/Quiz-Question01-1.mp3');
        music.play();
        setCurrentSituation("Start")
    }

    return (
        <Box sx={{ '& button': { m: 1 } }}>

          <div>
            <Button variant="contained" size="large" onClick={start}>
              Start
            </Button>
          </div>
        </Box>
      );

}
