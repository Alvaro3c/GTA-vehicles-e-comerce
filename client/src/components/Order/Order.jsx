import React from "react";
import axios from "axios";

const Order = ({ shopingCart }) => {
  const handleOrderSubmit = async () => {
    try {
      const totalCost = shopingCart.reduce((acc, item) => acc + item.price, 0);

      const orderData = {
        id_user: 1,
        cars: shopingCart,
        total_cost: totalCost,
      };

      const response = await axios.post("http://localhost:3000/api/orders", orderData);

      if (response.status === 201) {
        console.log("Order created successfully");
        // Clear the shopping cart or perform any other necessary actions
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <section>
      <h2>Shopping Cart:</h2>
      {shopingCart && shopingCart.length > 0 ? (
        <ul>
          {shopingCart.map((item, index) => (
            <li key={index}>
              Make: {item.make}, Model: {item.model}, Quantity: {item.quantity}, Price: {item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
      <button onClick={handleOrderSubmit}>Submit Your Order</button>
    </section>
  );
};

export default Order;
