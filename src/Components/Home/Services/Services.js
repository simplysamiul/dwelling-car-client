import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("https://guarded-taiga-19552.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return (
        <div>
            <h1>WE ARE OFFERING VEHICLE SERVICES</h1>
            <div>
                {
                    services.map(service => <Service
                        key={service.number}
                        service={service}
                        />)
                }
            </div>
        </div>
    );
};

export default Services;