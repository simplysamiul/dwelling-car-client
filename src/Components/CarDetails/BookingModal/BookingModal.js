import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './BookingModal.css';


function MyVerticallyCenteredModal(props) {
  const {car_name, price, number} = props.details;
  const { register, handleSubmit, reset } = useForm();
  console.log(handleSubmit.email);
  const onSubmit = data => console.log(data);
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
            <input type="text" value={new Date().toLocaleDateString()} disabled {...register("date")} />
            <input type="text" value={car_name} disabled {...register("car")} />
            <input type="text" value={carPrice} disabled {...register("price")} />
            <input type="text" placeholder="client name" {...register("name")} required />
            <input type="text" placeholder="client email" {...register("email", { pattern: /\S+@\S+\.\S+/ })} required />
            <input type="number" placeholder="client phone" {...register("phone")} required />
            <input type="text" placeholder="client address" {...register("address")} />
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
const BookingModal = ({details}) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="modal-container">
        <button className="order-button" onClick={() => setModalShow(true)}>
          Place Order
        </button>
  
        <MyVerticallyCenteredModal
          details={details}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
};

export default BookingModal;