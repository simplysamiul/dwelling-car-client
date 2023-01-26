import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [addSuccess, setAddSuccess] = useState(false);
    const [loading,setLoading] = useState(false);
    const onSubmit = data =>{
        setLoading(true);
        fetch("https://dwelling-car-server.up.railway.app/store/more",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setAddSuccess(true);
            reset();
        })
    }
    return (
        <div className="admin-container">
            <div className="make-admin">
            <h1>Add Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="car name *" {...register("car_name")} required/> <br />
            <input type="text" placeholder="engine*" {...register("engine")} required /> <br />
            <input type="text" placeholder="Mileage*" {...register("mileage")} /> <br />
            <input type="text" placeholder="Transmission*" {...register("Transmission")} /> <br />
            <input type="text" placeholder="Car Price *" {...register("price")} required /> <br />
            <input type="text" placeholder="Color*" {...register("color")} /> <br />
            <input type="text" placeholder="Car Image*" {...register("car_img")} required /> <br />
            <textarea style={{marginTop:"20px"}} rows="4" cols="32" placeholder="Description" {...register("short_desk")}></textarea> <br />
            <input className="btn btn-danger" type="submit" />
            </form>
            {loading===true && <div style={{textAlign:"center"}}><CircularProgress /></div>}
            {addSuccess === true && <Alert style={{color:"white"}} severity="success">Add Car Successfully!</Alert>}
        </div>
        </div>
    );
};

export default AddProduct;