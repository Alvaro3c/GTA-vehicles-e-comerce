import React, { useState } from "react";
import VehicleList from '../VehicleList/VehicleList'
import SearchVehicle from '../SearchVehicle/SearchVehicle'
import Order from '../Order/Order'
import Home from '../Home/Home'
import PastOrders from '../PastOrders/PastOrders'
import RegisterLogin from '../RegisterLogin/RegisterLogin'
import { Route, Routes } from 'react-router-dom'


const Main = () => {

  const [search, setSearch] = useState('')
  const [shopingCart, setShopingCart] = useState([]);
  console.log(shopingCart);

  return <>

    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/search' element={<SearchVehicle setSearch={setSearch} shopingCart={shopingCart} setShopingCart={setShopingCart} />} />
      <Route path='/pastorders' element={<PastOrders />} />
      <Route path='/order' element={<Order shopingCart={shopingCart} setShopingCart={setShopingCart} />} />

      <Route path='/register-login' element={<RegisterLogin />} />
    </Routes>





  </>
};

export default Main;
