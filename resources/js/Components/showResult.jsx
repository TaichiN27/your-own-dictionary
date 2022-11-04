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
    <div className="container mx-auto">

    <h1>Your Result</h1>

    {wrongAns.length!==0 ?
    <TableContainer component={Paper} sx={{ marginTop: "100px"}}>
      <Table sx={{ minWidth: 650, backgroundColor:"	#FF69A3" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Wrong Answers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wrongAns.map((ans) => (
            <TableRow
              key={ans.english}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {ans.english}
              </TableCell>
              <TableCell component="th" scope="row">
                {ans.japanese}
              </TableCell>
              <TableCell align="right">The count mistakes</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    :
    <div></div>

    }


    {correctAns.length!==0 ?
    <TableContainer component={Paper} sx={{ marginTop: "100px", marginBottom: "100px"}}>
      <Table sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Correct Answers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {correctAns.map((ans) => (
            <TableRow
              key={ans.english}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {ans.english}
              </TableCell>
              <TableCell align="right">he count mistakes</TableCell>
              <TableCell component="th" scope="row">
                {ans.japanese}
              </TableCell>
              <TableCell align="right">The count mistakes</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    :
    <div></div>}
    </div>

  );


}
