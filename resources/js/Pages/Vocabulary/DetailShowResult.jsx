import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";
import { Questions }  from '@/Components/questions';
import { StartQuestions }  from '@/Components/startQuestions';
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


const DetailShowResult = (props) => {
console.log(props);
const correctAns = props.ans.correctAns;
const wrongAns = props.ans.wrongAns




    return (
    <div  className=" bg-[#ff4500]">
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>














        </Authenticated>
    </div>

        )

}

export default DetailShowResult;
