import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';

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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}







export const List = ({ vocabularies }) => {
    
    console.log(vocabularies.data)
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
                if(current!=vocabulary.id) {
                        current=vocabulary.id
                        ctn = ctn + 1
                                         
                    }
                    return ctn
             }
             
                let time = vocabulary.created_at.split("T");
                let legitTime = time[0].replace('-','/')
                                             
                while(legitTime !== time[0]) {
                                                 
                    time[0] = time[0].replace('-','/');
                    legitTime = legitTime.replace('-','/');
                                                 
                     }  
                                    
        let date = time[1].split(".");
        let legitDate = date[0]
        
            function jumpToLink() {
                console.log(vocabulary.id)
                window.location.replace("/vocabularies/" + vocabulary.id)
            }
                                 
              return(         
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





/*import React from 'react'
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';



export const List = ({ vocabularies }) => {
    const tableBorder = {
        borderCollapse: "collapse",

        border: "2px solid green" 
    }
    const insideTable = {
        border: "1px solid green" 
    }
    const boxColor = {
        backgroundColor: "#ccffcc",
        padding: "0.3em" 
    }
    const hover = { BackgroundColor: "#fcfcaa" }


    const links = {
        display: "block",
        padding: "0.6em 1em" 
    }
    //let d = new Date(Date.parse(list.created));

    //let f = d.getMonth() + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();

    let ctn = 0
    let current = 0



    //console.log(vocabularies)
    return (
        <div className="list bg-white my-5">
            <table className="table" style={tableBorder}>
                <thead className="table-dark">
                    <tr>
                        <th scope="col-2">No.</th>
                        <th scope="col-4">English</th>
                        <th scope="col-6">Japanese</th>
                        <th scope="col-8">Time</th>
                    </tr>
                </thead>
                    <tbody>
                        {vocabularies.data.map((vocabulary) =>{
                        
                            
                        
                                 function ctnNum() {
                                     if(current!=vocabulary.id) {
                                         current=vocabulary.id
                                         ctn = ctn + 1
                                         
                                     }
                                    return ctn
                                 }
                                 
                                 let time = vocabulary.created_at.split("T");
                                 let legitTime = time[0].replace('-','/')
                                 
                                    while(legitTime !== time[0]) {
                                     
                                        time[0] = time[0].replace('-','/');
                                        legitTime = legitTime.replace('-','/');
                                     
                                    }  
                                    
                                let date = time[1].split(".");
                                let legitDate = date[0]
                                 
                             
                                 
                        
                                return(
                                <tr key={vocabulary.id}>
                                 <th scope="row" style={insideTable,boxColor}>{ctnNum()}</th>
                                    <td className="hover:bg-slate-200" style={insideTable}><Link href={`/vocabularies/${vocabulary.id}`} style={hover,links}>{vocabulary.english}</Link></td>
                                    <td className="hover:bg-slate-200" style={insideTable}><Link href={`/vocabularies/${vocabulary.id}`} style={hover, links}>{vocabulary.japanese}</Link></td>
                                    <td className="hover:bg-slate-200" style={insideTable}><Link href={`/vocabularies/${vocabulary.id}`} style={hover, links}>{legitTime}</Link></td>
                                </tr>)
                            })}
                            
                            
                    </tbody>
            </table>
            
        </div>
    )
}*/
