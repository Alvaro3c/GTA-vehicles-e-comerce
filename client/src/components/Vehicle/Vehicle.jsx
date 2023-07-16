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



    <Card style={{ width: '18rem' }} className="cards border-0 text-bg-success m-3">
      <Card.Img variant="top" src={imgUrl} alt={model} />
      <Card.Body>
        <Card.Title className="model">{model}</Card.Title>
        <Card.Text>
          {price?.toLocaleString('en-US') + ' ' + 'GTA$'}
        </Card.Text>
        <Button onClick={handleShoppingCartBtn} className="shoping-cart-btn">Add to shopping cart</Button>
      </Card.Body>
    </Card>

  </>

};

export default Vehicle;
