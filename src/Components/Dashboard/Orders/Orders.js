import React, { useEffect, useState } from "react";
import "./Orders.css";
import useAuth from "../../../hooks/useAuth";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: "'Zen Antique', serif",
    fontWeight: "500",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "yellow",
    fontFamily: "'Zen Antique', serif",
    letterSpacing: "0.1rem",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://dwelling-car-server.onrender.com/orders/order?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  // Delete orders
  const handeldeleteOrder = (id) => {
    const url = `https://dwelling-car-server.onrender.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.deletedCount) {
          alert("Are you sure ? Do you want to delete it ?");
          const remainingOrder = orders.filter((order) => order._id !== id);
          setOrders(remainingOrder);
        }
      });
  };
  return (
    <div className="order-tabel">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Client-Name</StyledTableCell>
              <StyledTableCell align="right">Car-Name</StyledTableCell>
              <StyledTableCell align="right">Order-date</StyledTableCell>
              <StyledTableCell align="right">Order-View</StyledTableCell>
              <StyledTableCell align="right">Cancel Order</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.clientName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.carName}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">
                  <img style={{ width: "80px" }} src={row.carImg} alt="" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <i
                    onClick={() => handeldeleteOrder(row._id)}
                    style={{
                      fontSize: "25px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    className="fas fa-times-circle"
                  ></i>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
