import React, {useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const ShowResult = (props) => {
    console.log(props);
    let correctAns = props.correctAns;
    let wrongAns = props.wrongAns;
    let setCorrectAns = props.setCorrectAns;
    let setWrongAns = props.setWrongAns;


   return(
    <div className="container mx-auto bg-[#ff4500] pb-8">

        <div className="text-center">
        <h1 className="text-white display-4">Result</h1>
        </div>

    {wrongAns.length!==0 ?
    <TableContainer component={Paper} sx={{ marginTop: "100px"}}>
      <Table sx={{ minWidth: 650, backgroundColor:"	#FF69A3" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Wrong Answers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wrongAns.map((ans) => {
            function jumpToLink() {
                console.log(ans.id)
                window.location.replace("/vocabularies/" + ans.id)
            }

          return(
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer'  }}
              hover
              onClick={jumpToLink}
            >
              <TableCell component="th" scope="row" >
                {ans.english}
              </TableCell>
              <TableCell component="th" scope="row" >
                {ans.japanese}
              </TableCell>
              <TableCell align="right" >The count mistakes</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    :
    <div></div>

    }


    {correctAns.length!==0 ?
    <TableContainer component={Paper} sx={{ marginTop: "100px"}}>
      <Table sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Correct Answers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {correctAns.map((ans) => {
            function jumpToLink() {
                console.log(ans.id)
                window.location.replace("/vocabularies/" + ans.id)
            }
            return(
            <TableRow
              key={ans.english}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer'}}
              hover
              onClick={jumpToLink}
            >
              <TableCell component="th" scope="row">
                {ans.english}
              </TableCell>
              <TableCell component="th" scope="row">
                {ans.japanese}
              </TableCell>
              <TableCell align="right">The count mistakes</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    :
    <div></div>}
    </div>

  );


}
