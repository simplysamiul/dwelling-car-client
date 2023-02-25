import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";

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

const ManageProducts = () => {
  const [cars, setCars] = useState([]);
  const [carLoading, setCarLoading] = useState(false);
  useEffect(() => {
    setCarLoading(true);
    fetch("https://dwelling-car-server.onrender.com/store/more")
      .then((res) => res.json())
      .then((data) => {
        setCarLoading(false);
        setCars(data);
      });
  }, []);
  // Handel Product delete
  const handelDeletecar = (id) => {
    fetch(`https://dwelling-car-server.onrender.com/store/more/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are you sure ? Do you want to delete it ?");
          const remainingCar = cars.filter((car) => car._id !== id);
          setCars(remainingCar);
        }
      });
  };

  return (
    <div className="order-tabel">
      {carLoading === true && (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Car-Name</StyledTableCell>
              <StyledTableCell align="right">Car-Price</StyledTableCell>
              <StyledTableCell align="right">Car-View</StyledTableCell>
              <StyledTableCell align="right">Delete-Car</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.car_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">
                  <img style={{ width: "80px" }} src={row.car_img} alt="" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <i
                    onClick={() => handelDeletecar(row._id)}
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

export default ManageProducts;
