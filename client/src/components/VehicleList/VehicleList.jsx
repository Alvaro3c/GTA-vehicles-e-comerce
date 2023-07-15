import React, { useEffect, useState } from "react";
import Vehicle from '../Vehicle/Vehicle'
import Order from '../Order/Order'


const VehicleList = (props) => {
  const search = props.search;
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesSliced, setVehiclesSliced] = useState([]);
  const [filterVehicles, setFilterVehicles] = useState([]);
  const [selectedType, setSelectedType] = useState('suvs')
  const [sortAtoZ, setSortAtoZ] = useState(true)
  const [selectedPage, setSelectedPage] = useState(1)
  const itemsPerPage = 10;


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
    setSelectedPage(1)
    handlePageChange(1)
  }, [search, selectedType])

  //fetch vehicles
  const getVehicles = async () => {
    const resp = await fetch(`https://gta.vercel.app/api/vehicles/class/${selectedType}`);
    const data = await resp.json();

    const arrVehicles = Object.values(data);//converts an object to an array to be iterated 
    setVehicles(arrVehicles);
    const slicedData = arrVehicles.slice(0, 10);
    setVehiclesSliced(slicedData);
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

  const handlePageChange = (page) => {
    setSelectedPage(page)
    // Calculate start and end indices
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    // Slice the data array based on the calculated indices
    const slicedData = vehicles.slice(startIndex, endIndex);
    setVehiclesSliced(slicedData);
  }

  const renderPagination = () => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(vehicles.length / itemsPerPage); i++) {
      pageNumbers.push(i)
    }

    return (
      <div>
        <button

          onClick={() => handlePageChange(selectedPage - 1)}
        >
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Back</span>
        </button>
        {pageNumbers?.map((pageNumber, index) =>
          <li key={index}>
            <button disabled={selectedPage == pageNumber} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        )}
        <button

          onClick={() => handlePageChange(selectedPage + 1)}
        >
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    )
  }
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
    {renderPagination()}
    {vehiclesSliced && vehiclesSliced.map((item, i) => <Vehicle key={i} manufacturer={item.manufacturer} model={item.model} price={item.price} imgUrl={item.images.frontQuarter} shopingCart={props.shopingCart} setShopingCart={props.setShopingCart} />)}

  </>;
};

export default VehicleList;
