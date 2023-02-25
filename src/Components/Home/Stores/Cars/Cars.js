import React, { useState, useEffect } from "react";
import Car from "../Car/Car";
import "./Cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://dwelling-car-server.onrender.com/store")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="cars-area">
      <div className="cars-contianer">
        {cars.map((car) => (
          <Car key={car.number} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
