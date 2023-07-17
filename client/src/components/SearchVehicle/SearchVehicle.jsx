import React, { useState } from "react";
import VehicleList from '../VehicleList/VehicleList';


const SearchVehicle = ({ setSearch, shopingCart, setShopingCart }) => {

  const [searchValue, setSearchValue] = useState('')

  const changeHandler = (e) => {
    setSearchValue(e.target.value)
    setSearch(e.target.value)
  }

  return <form onSubmit={(e) => { e.preventDefault() }}>
    <input type="text" placeholder="Search Vehicle" onChange={changeHandler} value={searchValue} />
    <VehicleList search={searchValue} shopingCart={shopingCart} setShopingCart={setShopingCart} setSearch={setSearchValue} />

  </form>;
};

export default SearchVehicle;
