import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
    const [reviewSuccess, setReviewSuccess] = useState(false);
    const [reviewLoading, setReviewLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = data =>{
        setReviewLoading(true);
        fetch("https://guarded-taiga-19552.herokuapp.com/reviews", {
            method: "POST",
            headers :{
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json)
        .then(data => {
            setReviewLoading(false);
            setReviewSuccess(true);
            reset();
        })
    }
    return (
        <div className="admin-container">
        <div className="make-admin">
        <h1>Give Review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue={user.displayName} disabled placeholder="email" {...register("name")} /> <br />
        <input placeholder="review (1 to 5)" type="number" {...register("review_number", { min: 1, max: 5 })} />
        <p className="review-text">Review must be (1 to 5)</p>
        <textarea style={{marginTop:"20px"}} rows="4" cols="32" placeholder="Description" {...register("review")}></textarea>
        <input className="btn btn-danger" type="submit" />
        </form>
        {reviewLoading===true && <div style={{textAlign:"center"}}><CircularProgress /></div>}
        {reviewSuccess===true && <Alert style={{color:"white",marginTop: "20px"}} severity="success">Succesfully Placed review!</Alert>}
    </div>
    </div>
    );
};

export default Review;