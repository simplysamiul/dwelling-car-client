import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './BookingModal.css';
import useAuth from '../../../hooks/useAuth';


function MyVerticallyCenteredModal(props) {
  const {car_name, price, car_img} = props.details;
  const {user} = useAuth();
  // Initialie Info
  const initInfo = {clientName:user.displayName, email: user.email, phone:""};
  const [orderInfo, SetOrderInfo] = useState(initInfo);
  // Handel On Blur
  const handelOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...orderInfo};
    newInfo[field] = value;
    SetOrderInfo(newInfo);
  };
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    // Collect Data
    const orders = {
      ...orderInfo,
      carName : car_name,
      carImg : car_img,
      date : new Date().toLocaleDateString()
    };
    // Send data to the server
    fetch("https://dwelling-car-server.up.railway.app/orders",{
      method: "POST",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(orders)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        props.setOrderSuccess(true);
        reset();
        props.onHide();
      }
    });
  };y
  const carPrice = `Price : $ ${price} /-`
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-area">
          <h4>Confirm Your Order</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" defaultValue={new Date().toLocaleDateString()} disabled {...register("date")} />
            <input type="text" defaultValue={car_name} disabled {...register("car")} />
            <input type="text" defaultValue={carPrice} disabled {...register("price")} />
            <input type="text" name="clientName" onBlur={handelOnBlur} placeholder="Your name" defaultValue={user.displayName} {...register("name")} required />
            <input type="text" name="email" onBlur={handelOnBlur} placeholder="Your email" defaultValue={user.email} {...register("email", { pattern: /\S+@\S+\.\S+/ })} required />
            <input type="text" name="phone" onBlur={handelOnBlur} placeholder="client phone" {...register("phone")} required />
            <input type="text" name="address" placeholder="client address" {...register("address")} />
            <input className="order-button" type="submit" />
          </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const BookingModal = ({details, setOrderSuccess}) => {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="modal-container">
        <button className="order-button" onClick={() => setModalShow(true)}>
          Place Order
        </button>
  
        <MyVerticallyCenteredModal
          details={details}
          show={modalShow}
          setOrderSuccess={setOrderSuccess}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
};

export default BookingModal;