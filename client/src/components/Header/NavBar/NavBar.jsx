import React from "react";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
