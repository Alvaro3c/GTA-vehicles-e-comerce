import React, { useEffect, useState } from "react";
import Vehicle from '../Vehicle/Vehicle'
import Order from '../Order/Order'


const VehicleList = (props) => {
  const search = props.search;
  const [vehicles, setVehicles] = useState([]);
  const [filterVehicles, setFilterVehicles] = useState([]);
  const [selectedType, setSelectedType] = useState('suvs')
  const [sortAtoZ, setSortAtoZ] = useState(true)


  const handleSelectChange = (e) => {
    e.preventDefault()
    setSelectedType(e.target.value)
  }

  //Seacrh vehicle
  useEffect(() => {
    if (search === '') {
      getVehicles();
    } else {
      const filteredVehicles = vehicles.filter((item) => item.manufacturer.includes(search) || item.model.includes(search))
      setVehicles(filteredVehicles)
    }
  }, [search, selectedType])
  console.log(vehicles)
  //fetch vehicles
  const getVehicles = async () => {
    const resp = await fetch(`https://gta.vercel.app/api/vehicles/class/${selectedType}`);
    const data = await resp.json();

    const arrVehicles = Object.values(data);//converts an object to an array to be iterated 
    setVehicles(arrVehicles);
  }
  const handleSortSpeed = () => {
    const sortedVehicles = vehicles
      .map((vehicle, index) => ({ index, mph: vehicle?.topSpeed?.mph }))
      .sort((a, b) => b.mph - a.mph)
      .map((item) => vehicles[item.index]);
    setVehicles(sortedVehicles);
  };
  const handleSortAlphabetically = () => {
    if (sortAtoZ) {
      const sortedVehicles = [...vehicles].sort((a, b) => a.model.localeCompare(b.model));
      setVehicles(sortedVehicles);
    } else {
      const sortedVehicles = [...vehicles].sort((a, b) => b.model.localeCompare(a.model));
      setVehicles(sortedVehicles);
    }
    setSortAtoZ(!sortAtoZ)
  };
  return <>

    <label htmlFor="select-car-type">Select a type</label>
    <select name="" id="select-car-type" onChange={handleSelectChange}>
      <option value="suvs">suvs</option>
      <option value="super">super</option>
      <option value="sportsclassics">sportsclassics</option>
      <option value="sports">sports</option>
      <option value="sedans">sedans</option>
      <option value="offroad">offroad</option>
      <option value="motorcycles">motorcycles</option>
      <option value="coupes">coupes</option>
      <option value="muscle">muscle</option>
      <option value="compacts">compacts</option>
    </select>
    <button onClick={handleSortSpeed}>Sort with Speed</button>
    <button onClick={handleSortAlphabetically}>Sort with alphebet</button>
    {vehicles && vehicles.map((item, i) => <Vehicle key={i} manufacturer={item.manufacturer} model={item.model} price={item.price} imgUrl={item.images.frontQuarter} shopingCart={props.shopingCart} setShopingCart={props.setShopingCart} />)}

  </>;
};

export default VehicleList;
