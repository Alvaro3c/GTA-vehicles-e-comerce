import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';


const Order = ({ shopingCart }) => {
  const [totalCost, setTotalCost] = useState(0);
  console.log(shopingCart)
  useEffect(() => {
    const calculateTotalCost = () => {
      const cost = shopingCart.reduce((acc, item) => acc + item.price, 0);
      setTotalCost(cost);
    };

    calculateTotalCost();
  }, [shopingCart]);

  const handleOrderSubmit = async () => {
    try {
      const orderData = {
        id_user: 1,
        cars: JSON.stringify(shopingCart),
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

  return <>
    <section>
      <h2>Shopping Cart:</h2>
      {shopingCart && shopingCart.length > 0 ? (

        <article>
          {shopingCart.map((item, index) => (
            <Card key={index} className="m-4 border-0">
              <Card.Header className="color">{item.make + ' ' + item.model}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {'price: ' + item.price.toLocaleString('en-US') + ' ' + 'GTA$'}
                </Card.Text>
                <Card.Text>
                  {'Quantity: ' + item.quantity}
                </Card.Text>
                <img src="{item}" alt="" />
              </Card.Body>
            </Card>))}
        </article>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}

      <p>Total cost: {totalCost.toLocaleString('en-US') + ' ' + 'GTA$'}</p>
      <button onClick={handleOrderSubmit}>Submit Your Order</button>
    </section>

  </>
};

export default Order;
