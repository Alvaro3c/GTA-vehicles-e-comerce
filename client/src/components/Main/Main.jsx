import React, { useState } from "react";
import VehicleList from '../VehicleList/VehicleList'
import SearchVehicle from '../SearchVehicle/SearchVehicle'
import Order from '../Order/Order'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'


const Main = () => {

  const [search, setSearch] = useState('')
  const [shopingCart, setShopingCart] = useState([]);
  console.log(shopingCart);

  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='search' element={<SearchVehicle setSearch={setSearch} shopingCart={shopingCart} setShopingCart={setShopingCart} />} />
      <Route path='order' element={<Order shopingCart={shopingCart} setShopingCart={setShopingCart} />} />
    </Routes>




  </>
};

export default Main;
