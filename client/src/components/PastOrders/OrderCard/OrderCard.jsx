import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './OrderCard.css'

const OrderCard = ({ orderId, totalCost, orderDate, cars }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return (
    <div>
      <Card className="card border-0" >
        <Card.Header className="bg-light">Order ID: {orderId}</Card.Header>
        <Card.Body>
          <Card.Title className="text-light">Total Cost: {totalCost.toLocaleString("en-US") + ' GTA$'}</Card.Title>
          <Card.Title className="text-light">Order Date: {formatDate(orderDate)}</Card.Title>
          <Card.Title className="text-light">Cars:</Card.Title>
          <Card.Text className="orderd-cars text-light">
            {cars.map((car, carIndex) => (
              <article key={carIndex}>
                <p>Car Name: {`${car.make} ${car.model} || quantity: ${car.quantity}`}</p>
                <p>Price: {car.price.toLocaleString("en-US")}</p>
              </article>
            ))}
          </Card.Text>
          <Button variant="primary" className="bg-warning text-dark border-dark">Go Delete Order</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderCard;
