import React from "react";

const Vehicle = (props) => {

  return <div>
    <h1>Model:{props.model}</h1>
    <img src={props.imgUrl} alt={props.model} />
    <p>{props.price}</p>
    <button>Show more stats</button>
    <button>Add to shopping cart</button>
  </div>;
};

export default Vehicle;
