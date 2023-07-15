import React, { useState } from "react";
import VehicleList from '../VehicleList/VehicleList'
import SearchVehicle from '../SearchVehicle/SearchVehicle'
import Order from '../Order/Order'
import { Route, Routes, Navigate } from 'react-router-dom'


const Main = () => {

  const [search, setSearch] = useState('')
  const [shopingCart, setShopingCart] = useState([]);
  console.log(shopingCart);

  return <>
    <Routes>
      <Route path='/' element={<VehicleList search={search} shopingCart={shopingCart} setShopingCart={setShopingCart} />} />
      <Route path='search' element={<SearchVehicle setSearch={setSearch} />} />
      <Route path='order' element={<Order shopingCart={shopingCart} setShopingCart={setShopingCart} />} />
    </Routes>




  </>
};

export default Main;
