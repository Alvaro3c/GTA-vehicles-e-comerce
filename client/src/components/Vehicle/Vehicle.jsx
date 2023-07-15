import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Vehicle.css'

const Vehicle = ({ shopingCart, manufacturer, model, price, setShopingCart, imgUrl }) => {
  const [quantity, setQuantity] = useState(1);

  const handleShoppingCartBtn = () => {
    const existingItem = shopingCart.find(item => item.make === manufacturer && item.model === model);

    if (existingItem) {
      const updatedCart = shopingCart.map(item =>
        item.make === manufacturer && item.model === model ? { ...item, quantity: item.quantity + quantity } : item
      );
      setShopingCart(updatedCart);
    } else {
      const updatedCart = [...shopingCart, { make: manufacturer, model: model, quantity: quantity, price: price }];
      setShopingCart(updatedCart);
    }

    setQuantity(1);
  };

  return <>



    <Card style={{ width: '18rem' }} className="border-0 text-bg-success m-4">
      <Card.Img variant="top" src={imgUrl} alt={model} />
      <Card.Body>
        <Card.Title className="model">{model}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={handleShoppingCartBtn}>Add to shopping cart</Button>
      </Card.Body>
    </Card>

  </>

};

export default Vehicle;
