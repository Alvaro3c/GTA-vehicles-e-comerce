import React, { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import './Order.css'


const Order = ({ shopingCart }) => {
  const [totalCost, setTotalCost] = useState(0);


  useEffect(() => {
    const calculateTotalCost = () => {
      const cost = shopingCart.reduce((acc, item) => (acc + item.price) * item.quantity, 0);
      setTotalCost(cost);
    };

    calculateTotalCost();
  }, [shopingCart]);

  const userData = useUserContext()

  const handleOrderSubmit = async () => {
    try {
      const orderData = {
        id_user: userData?.user?.id_user,
        cars: JSON.stringify(shopingCart),
        total_cost: totalCost,
      };

      const response = await axios.post("http://localhost:3000/api/orders", orderData);

      if (response.status === 201) {

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-center',
          iconColor: 'white',
          customClass: {
            popup: 'colored-toast'
          },
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true
        })
        await Toast.fire({
          icon: 'success',
          title: 'Order Submited'
        })
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
            <Card key={index} className="m-4 border-0 text-light" >
              <Card.Header className="color bg-light text-dark">{item.make + ' ' + item.model}</Card.Header>
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
