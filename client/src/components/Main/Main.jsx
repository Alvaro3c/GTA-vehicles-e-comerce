import React, { useState } from "react";
import VehicleList from '../VehicleList/VehicleList'
import SearchVehicle from '../SearchVehicle/SearchVehicle'

const Main = () => {

  const [search, setSearch] = useState('')

  return <>
    <SearchVehicle setSearch={setSearch} />
    <VehicleList search={search} />
  </>
};

export default Main;
