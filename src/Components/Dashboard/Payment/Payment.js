import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Payment = () => {
    const style = {
        fontFamily: "'Zen Antique', serif",
        trxtAlign : "center"
    }
    return (
        <div style={style}>
            <h1 style={{fontSize:"35px"}}>Payment Getway System will be <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Coming Soon...
  </Button> <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
  </Button></h1>
        </div>
    );
};

export default Payment;