import React from 'react';
import { Link } from 'react-router-dom';
import './MoreCar.css';

const MoreCar = (props) => {
    const {car_name, car_img, price, mileage, Transmission, _id} = props.car;
    return (
        <div>
            <div className="car-container">
                <img src={car_img} alt="" />
                <p className="sale-tag">NEW</p>
                <div className="car-info">
                    <h5>{car_name}</h5>
                    <p className="car-price">$ {price}</p>
                </div>
                <div className="car-feature">
                    <div className="feature-gap">
                    <i className="fas fa-cogs"></i>
                    <p>{mileage}</p>
                    </div>
                    <div className="feature-gap">
                    <i className="fas fa-cog"></i>
                    <p>{Transmission}</p>
                    </div>
                    <div className="feature-gap">
                    <i className="fas fa-calendar-alt"></i>
                    <p>2016</p>
                    </div>
                </div>
                <div className="more-order">
                <Link to={`/boking_order/${_id}`}>
                <button><span>Booking</span> <i className="far fa-calendar-alt"></i></button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default MoreCar;