import React from 'react';
import Rating from '@mui/material/Rating';
import './ClientReview.css';

const ClientReview = (props) => {
    const { name, review_number, review} = props.review;
    const reviewNumber = parseFloat(review_number);
    return (
        <div className="review-card">
          <div className="review-info">
            <h4>{name}</h4>
            <p>{review}</p>
            <Rating name="read-only" value={reviewNumber} readOnly />
          </div>
        </div>
    );
};

export default ClientReview;