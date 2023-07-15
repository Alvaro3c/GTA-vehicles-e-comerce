import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <>
    <nav>
      <ul className='nav'>
        <li className="nav-link active"><Link to='/'>Home</Link></li>
        <li className="nav-link "><Link to='/search'>Search car</Link></li>
        <li className="nav-link " > <Link to='/order'>Shopping Cart</Link></li >
      </ul >
    </nav >
  </>;
};

export default NavBar;
