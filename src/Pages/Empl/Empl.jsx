import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {timeSheet} from '../../Data';
import { GlobalContext } from '../../context/Globalstate';

export default function Empl() {
    const {users}= useContext(GlobalContext);
    
  return (
    <div className='empl'>
        <h1>Timesheet Details</h1>
    
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Employee name</TableCell>
            <TableCell align="right">Employee id</TableCell>
            <TableCell align="right">Login time</TableCell>
            <TableCell align="right">Logout time</TableCell>
            <TableCell align="right">Total hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
        
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{user.login}</TableCell>
              <TableCell align="left">{user.logout}</TableCell>
              <TableCell align="left">{user.total}</TableCell>
          
            </TableRow>
            
          ))}
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
