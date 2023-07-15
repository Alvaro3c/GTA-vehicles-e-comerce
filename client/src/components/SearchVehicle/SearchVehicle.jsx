import React, { useState } from "react";
import VehicleList from '../VehicleList/VehicleList';


const SearchVehicle = (props) => {

  const [searchValue, setSearchValue] = useState('')

  const changeHandler = (e) => {
    setSearchValue(e.target.value)
    props.setSearch(e.target.value)
  }

  return <form>
    <input type="text" placeholder="Search Vehicle" onChange={changeHandler} value={searchValue} />
    <VehicleList />

  </form>;
};

export default SearchVehicle;
