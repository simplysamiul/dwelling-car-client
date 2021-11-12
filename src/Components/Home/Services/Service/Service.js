import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {service_name, description, img} = service;
    return (
            <div className="service-container">
            <div className="service-img">
            <img src={img} alt="" />
            </div>
            <div className="service-info">
                <h4>{service_name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;