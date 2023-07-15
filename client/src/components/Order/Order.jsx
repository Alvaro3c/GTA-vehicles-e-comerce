import React from "react";

const Order = ({ shopingCart }) => {
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
      <button>Submit Your Order</button>
    </section>
  );
};

export default Order;
