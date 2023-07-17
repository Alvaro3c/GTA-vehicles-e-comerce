import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './OrderCard.css'
import Swal from 'sweetalert2';

const OrderCard = ({ orderId, totalCost, orderDate, cars }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleDeleteOrderBtn = async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true
    })
    await Toast.fire({
      icon: 'info',
      title: 'Send an email to orders@rides.com to cancel your order'
    })

  }
  return (
    <>
      <Card className="card border-0" >
        <Card.Header className="bg-light">Order ID: {orderId}</Card.Header>
        <Card.Body>
          <Card.Title className="text-light">Total Cost: {totalCost.toLocaleString("en-US") + ' GTA$'}</Card.Title>
          <Card.Title className="text-light">Order Date: {formatDate(orderDate)}</Card.Title>
          <Card.Title className="text-light">Cars:</Card.Title>
          <Card.Text className="orderd-cars text-light">
            {cars.map((car, carIndex) => (
              <div key={carIndex}>
                <p>Car Name: {`${car.make} ${car.model} || quantity: ${car.quantity}`}</p>
                <p>Price: {car.price.toLocaleString("en-US")}</p>
              </div>
            ))}
          </Card.Text>
          <Button onClick={handleDeleteOrderBtn} variant="primary" className="bg-warning text-dark border-dark">Go Delete Order</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default OrderCard;
