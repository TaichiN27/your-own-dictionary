import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";


export const ShowResult = (props) => {
    console.log(props);
    let correctAns = props.correctAns;
    let wrongAns = props.wrongAns;
    let setCorrectAns = props.setCorrectAns;
    let setWrongAns = props.setWrongAns;

   return(
    <div><h1>OK</h1></div>
   )

}
