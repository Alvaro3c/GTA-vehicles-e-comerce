import React, { useEffect, useState } from "react";
import Vehicle from '../Vehicle/Vehicle';

const VehicleList = (props) => {
  const search = props.search;
  const [vehicles, setVehicles] = useState([]);
  const [sortedVehicles, setSortedVehicles] = useState([]);
  const [vehiclesSliced, setVehiclesSliced] = useState([]);
  const [selectedType, setSelectedType] = useState('suvs');
  const [sortAtoZ, setSortAtoZ] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const itemsPerPage = 10;

  const handleSelectChange = (e) => {
    e.preventDefault();
    setSelectedType(e.target.value);
    setSortAtoZ(false); // Set the default sorting order to ascending (A to Z)
  };

  useEffect(() => {
    if (search === '') {
      getVehicles();
    } else {
      const filteredVehicles = vehicles.filter((item) =>
        item.manufacturer.includes(search) || item.model.includes(search)
      );
      setVehicles(filteredVehicles);
    }
    setSelectedPage(1);
    handlePageChange(1);
  }, [search, selectedType]);

  const getVehicles = async () => {
    const resp = await fetch(`https://gta.vercel.app/api/vehicles/class/${selectedType}`);
    const data = await resp.json();
    const arrVehicles = Object.values(data);
    setVehicles(arrVehicles);
    handleSortAndPageChange(arrVehicles);
  };

  const handleSortAndPageChange = (sortedVehiclesData) => {
    const slicedData = sortedVehiclesData.slice(0, itemsPerPage);
    setSortedVehicles(sortedVehiclesData);
    setVehiclesSliced(slicedData);
    setSelectedPage(1);
  };

  const handleSortSpeed = () => {
    const sortedVehiclesData = [...vehicles].sort((a, b) => b?.topSpeed?.mph - a?.topSpeed?.mph);
    handleSortAndPageChange(sortedVehiclesData);
  };

  const handleSortAlphabetically = () => {
    const sortedVehiclesData = [...vehicles].sort((a, b) => {
      const modelA = a.model || '';
      const modelB = b.model || '';
      return sortAtoZ ? modelA.localeCompare(modelB) : modelB.localeCompare(modelA);
    });
    setSortAtoZ(!sortAtoZ);
    handleSortAndPageChange(sortedVehiclesData);
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const slicedData = sortedVehicles.slice(startIndex, endIndex);
    setVehiclesSliced(slicedData);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(sortedVehicles.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <button
          disabled={selectedPage === 1}
          onClick={() => handlePageChange(selectedPage - 1)}
        >
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Back</span>
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            disabled={selectedPage === pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          disabled={selectedPage === totalPages}
          onClick={() => handlePageChange(selectedPage + 1)}
        >
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    );
  };

  return (
    <>
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
      <button onClick={handleSortSpeed}>Sort by Speed</button>
      <button onClick={handleSortAlphabetically}>Sort Alphabetically</button>
      {renderPagination()}
      {vehiclesSliced &&
        vehiclesSliced.map((item, i) => (
          <Vehicle
            key={i}
            manufacturer={item.manufacturer}
            model={item.model}
            price={item.price}
            imgUrl={item.images.frontQuarter}
            shopingCart={props.shopingCart}
            setShopingCart={props.setShopingCart}
          />
        ))}
    </>
  );
};

export default VehicleList;
