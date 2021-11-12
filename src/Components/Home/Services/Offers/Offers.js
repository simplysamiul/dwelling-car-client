import React from 'react';
import './Offers.css';
import offerOne from '../../../../resource/offers-1.png';
import offerTwo from '../../../../resource/offers-2.png';


const Offers = () => {
    return (
        <div className="offers-container">
             <div className="offers">
            <img src={offerOne} alt="" />
            <img src={offerTwo} alt="" />
        </div>
        </div>
    );
};

export default Offers;