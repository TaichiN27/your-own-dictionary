import React, { useState } from "react";;
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Authenticated from "@/Layouts/AuthenticatedLayout"


const ShowResult = (props) => {

    const ans = props.data




    return (
        <div className=" bg-[#ff4500]">
            <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }>
                <div className=" bg-[#ff4500]">
                    <div className="container mx-auto pb-80">

                        <div className="text-center">
                            <h1 className="text-white display-4">Result</h1>
                        </div>

                        {ans.length !== 0 ?
                            <TableContainer component={Paper} sx={{ marginTop: "100px" }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Answers</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {ans.map((ans) => {
                                            let correct = false;
                                            let vocabulary = JSON.parse(ans.vocabulary);
                                            if (ans.correct == 'correct') {
                                                correct = true
                                            } else {
                                                correct = false
                                            }
                                            function jumpToLink() {
                                                window.location.replace("/quiz/result/" + vocabulary.id)
                                            }


                                            return (
                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                                    hover
                                                    onClick={jumpToLink}
                                                    className={correct ? 'bg-light' : 'bg-info'}
                                                >
                                                    <TableCell component="th" scope="row" >
                                                        {vocabulary.english}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" >
                                                        {vocabulary.japanese}
                                                    </TableCell>
                                                    <TableCell align="right" >{ans.correct}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            :
                            <div></div>

                        }


                    </div>
                </div>
            </Authenticated>
        </div>

    );


}


export default ShowResult;
