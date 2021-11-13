import React, { useEffect, useState } from 'react';
import './CarDetails.css';
import bannerThree from '../../resource/details-bg.jpg';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';

const CarDetails = () => {
    const  { id }  = useParams();
    const [details, setDetails] = useState([]);
    const {car_name, engine, mileage, Transmission, car_img, price, short_desk, color, } = details;

    useEffect(()=>{
        const url = `https://guarded-taiga-19552.herokuapp.com/store/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[id]);
    return (
    <>
        <div className="details-area">
           <img src={bannerThree} alt="" />
           <div className="details-container">
                <div className="details-info">
                    <div className="car-img">
                        <img src={car_img} alt="" />
                        <h4>Price : $ {price} /-</h4>
                        <BookingModal details={details}  />
                    </div>
                    <div className="car-details">
                        <div className="info-top">
                            <h1>{car_name}</h1>
                            <div className="contact-icon">
                        <p><i className="fas fa-phone-alt"></i> (+880) 017 2546 125</p>
                        <p><i className="far fa-envelope"></i> dwellingcar@support.com</p>
                        </div>
                        <h3>Description</h3>
                        <p>{short_desk}</p>
                        </div>
                        <h4 className="section-title">Specification</h4>
                        <div className="full-details">
                            <div>
                                <p>Condition : New</p>
                                <p>Year : 2016</p>
                                <p>Fuel : Premium</p>
                                <p>Color : {color}</p>
                            </div>
                            <div>
                               <p>Mileage : {mileage} mileage</p>
                               <p>Engine : {engine}</p>
                               <p>Transmission : {Transmission}</p>
                               <p>Door : 5</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div> 
        </div>
    </>
    );
};

export default CarDetails;