import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily : "'Zen Antique', serif",
    fontWeight : "500"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color : "yellow",
    fontFamily : "'Zen Antique', serif",
    letterSpacing : "0.1rem"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [orderLoading, setOrderLoading] = useState(false);
    useEffect(()=>{
        setOrderLoading(true);
        fetch("https://dwelling-car-server.up.railway.app/orders")
        .then(res => res.json())
        .then(data => {
            setOrderLoading(false);
            setAllOrders(data);
        })
    },[]);
    return (
        <div className="order-tabel">
          {orderLoading===true && <div style={{textAlign:"center"}}><CircularProgress /></div>}
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Client-Name</StyledTableCell>
            <StyledTableCell align="right">Client-Email</StyledTableCell>
            <StyledTableCell align="right">Order-Name</StyledTableCell>
            <StyledTableCell align="right">Order-View</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.clientName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.carName}</StyledTableCell>
              <StyledTableCell align="right"><img style={{width:"80px"}} src={row.carImg} alt="" /></StyledTableCell>
              <StyledTableCell style={{color :"red"}} align="right">Pending ...</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
    );
};

export default AllOrders;