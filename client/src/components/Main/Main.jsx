import React, { useState } from "react";
import VehicleList from '../VehicleList/VehicleList'
import SearchVehicle from '../SearchVehicle/SearchVehicle'
import Order from '../Order/Order'

const Main = () => {

  const [search, setSearch] = useState('')
  const [shopingCart, setShopingCart] = useState([]);
  console.log(shopingCart);

  return <>
    <Order shopingCart={shopingCart} setShopingCart={setShopingCart} />
    <SearchVehicle setSearch={setSearch} />
    <VehicleList search={search} shopingCart={shopingCart} setShopingCart={setShopingCart} />
  </>
};

export default Main;
