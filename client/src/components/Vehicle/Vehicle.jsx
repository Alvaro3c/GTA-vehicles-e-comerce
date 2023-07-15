import React, { useState } from "react";

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

  return (
    <article>
      <h1>{model}</h1>
      <img src={imgUrl} alt={model} />
      <p>{price}</p>
      <button>Show more stats</button>
      <button onClick={handleShoppingCartBtn}>Add to shopping cart</button>
    </article>
  );
};

export default Vehicle;
