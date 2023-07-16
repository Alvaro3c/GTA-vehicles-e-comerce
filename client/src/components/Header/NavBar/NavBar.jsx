import React from "react";
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return <>
    <nav>
      <ul className='nav'>
        <li className="nav-link active"><Link to='/'>HOME</Link></li>
        <li className="nav-link "><Link to='/search'>SEARCH CAR</Link></li>
        <li className="nav-link " > <Link to='/order'>SHOPPING CART</Link></li >
      </ul >
    </nav >

  </>;
};

export default NavBar;
