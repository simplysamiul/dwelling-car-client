import React, { useEffect, useState } from 'react';
import bannerOne from '../../../resource/cars-bg.jpg';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import CircularProgress from '@mui/material/CircularProgress';
import MoreCar from '../MoreCar/MoreCar'; 
import './MoreCars.css';

const MoreCars = () => {
    const [moreCars, setMoreCars] = useState([]);
    const [carLoading, setCarLoading] = useState(false);
    useEffect(()=>{
        setCarLoading(true);
        fetch("https://dwelling-car-server.up.railway.app/store/more")
        .then(res=>res.json())
        .then(data => {
            setCarLoading(false);
            setMoreCars(data);
        })
    },[]);
    return (
        <>
        <Menubar />
        <div className="more-area">
            <img src={bannerOne} alt="" />
            <h1>Our <span>Store</span></h1>
            <div className="cars-area">
            {carLoading===true && <div style={{textAlign:"center"}}><CircularProgress /></div>}
            <div className="cars-contianer">
                {
                    moreCars.map(moreCar => <MoreCar
                    key={moreCar._id}
                    car={moreCar}
                    />)
                }
            </div>
        </div>
        </div>
        <Footer />
        </>
    );
};

export default MoreCars;