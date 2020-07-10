import React from 'react';
import logo from '../assets/jabez.webp'
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to="/" ><img src={logo} alt="logo" style={{ width: '135px' }} /></Navbar.Brand>
  <div class="d-inline p-2 text-white">Expanding your connectivity - Bridging the digital divide</div>
  <div class="d-inline p-2 text-white">+27 (11) 44 33 744</div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="ml-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
    <Nav.Link as={Link} to="/services">Services</Nav.Link>
    <Nav.Link as={Link} to="/coverage">Coverage Map</Nav.Link>
    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationBar;
