import React, { useEffect, useState } from 'react';
import bannerOne from '../../../resource/cars-bg.jpg';
import MoreCar from '../MoreCar/MoreCar'; 
import './MoreCars.css';

const MoreCars = () => {
    const [moreCars, setMoreCars] = useState([]);
    useEffect(()=>{
        fetch("https://guarded-taiga-19552.herokuapp.com/store/more")
        .then(res=>res.json())
        .then(data => setMoreCars(data))
    },[]);
    return (
        <div className="more-area">
            <img src={bannerOne} alt="" />
            <h1>Our <span>Store</span></h1>
            <div className="cars-area">
            <div className="cars-contianer">
                {
                    moreCars.map(moreCar => <MoreCar
                    key={moreCar.number}
                    car={moreCar}
                    />)
                }
            </div>
        </div>
        </div>
    );
};

export default MoreCars;