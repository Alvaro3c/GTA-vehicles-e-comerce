import React from "react";

const OrderCard = ({ orderId, totalCost, orderDate, cars }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return (
    <div>
      <h2>Order ID: {orderId}</h2>
      <h3>Total Cost: {totalCost}</h3>
      <h3>Order Date: {formatDate(orderDate)}</h3>
      <h3>Cars:</h3>
      {cars.map((car, carIndex) => (
        <div key={carIndex}>
          <p>Car Name: {`${car.make} ${car.model}`}</p>
          <p>Car Price: {car.price}</p>
          {/* Display other car properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
