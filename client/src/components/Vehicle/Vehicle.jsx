import React, { useState } from "react";

const Vehicle = (props) => {




  const handleShoppingCartBtn = () => {
    const updatedCart = [...props.shopingCart, { make: props.manufacturer, model: props.model, quantity: 1, price: props.price }];
    props.setShopingCart(updatedCart);


  }
  return <article>
    <h1>{props.model}</h1>
    <img src={props.imgUrl} alt={props.model} />
    <p>{props.price}</p>
    <button>Show more stats</button>
    <button onClick={handleShoppingCartBtn}>Add to shopping cart</button>

  </article>;
};

export default Vehicle;
