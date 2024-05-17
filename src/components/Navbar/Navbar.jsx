import React from "react";
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar id="navv" collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#Home"> Moms-Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link id="na"  href="#Home">Home </Nav.Link>
          <NavDropdown  title="Items" id="na">
              <NavDropdown.Item href="#NVB">Non veg Biryanis</NavDropdown.Item>
              <NavDropdown.Item href="#NVS">
                Nonveg starters
              </NavDropdown.Item>
              <NavDropdown.Item href="#VB">Veg Biryanis</NavDropdown.Item>
              <NavDropdown.Item href="#VS"> Veg starters</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="na" href="#Services">Services</Nav.Link>
            <Nav.Link id="na" href="#Aboutus">About Us</Nav.Link>
            <Nav.Link id="na" href="#Contact">Contact</Nav.Link>
            <Nav.Link id="na" href="#deets">Signup</Nav.Link>
            <Nav.Link id="na" eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;