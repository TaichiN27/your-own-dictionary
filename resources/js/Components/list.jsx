import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 24,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));









export const List = ({ vocabularies }) => {
    let ctn = 0
    let current = 0


    return (
        <TableContainer component={Paper} className="mt-5 mb-5">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>No.</StyledTableCell>
                        <StyledTableCell align="right">English</StyledTableCell>
                        <StyledTableCell align="right">Japanese</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {vocabularies.data.map((vocabulary) => {
                        function ctnNum() {
                            if (current != vocabulary.id) {
                                current = vocabulary.id
                                ctn = ctn + 1

                            }
                            return ctn
                        }

                        let time = vocabulary.created_at.split("T");
                        let legitTime = time[0].replace('-', '/')

                        while (legitTime !== time[0]) {

                            time[0] = time[0].replace('-', '/');
                            legitTime = legitTime.replace('-', '/');

                        }

                        let date = time[1].split(".");
                        let legitDate = date[0]

                        function jumpToLink() {
                            console.log(vocabulary.id)
                            window.location.replace("/vocabularies/" + vocabulary.id)
                        }

                        return (
                            <StyledTableRow hover onClick={jumpToLink}>
                                <StyledTableCell component="th" scope="row">
                                    {ctnNum()}
                                </StyledTableCell>
                                <StyledTableCell align="right" className="cursor-pointer">{vocabulary.english}</StyledTableCell>
                                <StyledTableCell align="right" className="cursor-pointer">{vocabulary.japanese}</StyledTableCell>
                                <StyledTableCell align="right" className="cursor-pointer">{legitTime}</StyledTableCell>
                            </StyledTableRow>
                        )


                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}





