import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://dwelling-car-server.onrender.com/services") //https://dwelling-car-server.up.railway.app
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-area">
      <h1>WE ARE OFFERING VEHICLE SERVICES</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.number} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
