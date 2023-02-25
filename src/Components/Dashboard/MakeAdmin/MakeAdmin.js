import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [adminSuccess, setAdminSuccess] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setAdminLoading(true);
    const email = data.email;
    const user = { email };
    fetch("https://dwelling-car-server.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setAdminLoading(false);
        if (data.modifiedCount) {
          setAdminSuccess(true);
          reset();
        } else {
          alert("Failed Admin Creation !");
        }
      });
  };
  return (
    <div className="admin-container">
      <div className="make-admin">
        <h1>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="email" {...register("email")} />{" "}
          <br />
          <input className="btn btn-danger" type="submit" />
        </form>
        {adminLoading === true && (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        )}
        {adminSuccess === true && (
          <Alert
            style={{ color: "white", marginTop: "20px" }}
            severity="success"
          >
            Admin Created Succesfully!
          </Alert>
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
