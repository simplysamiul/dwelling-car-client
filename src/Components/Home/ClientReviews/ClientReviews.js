import React, { useEffect, useState } from 'react';
import ClientReview from './ClientReview/ClientReview';
import './ClientReviews.css';

const ClientReviews = () =>{
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch("https://dwelling-car-server.up.railway.app/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);
    return(
        <div className="reviews-area">
            <h1>Our <span>Client's</span> Reviews</h1>
            <div className="reviews-container">
                {
                    reviews.map(review => <ClientReview
                        key={review._id}
                        review={review}
                        />)
                }
            </div>
        </div>
    )
};

export default ClientReviews;