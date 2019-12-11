import React from "react";
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
   
  return (
    <Nav fill variant="tabs" id="navbar">
    <Nav.Item>
      <Nav.Link href="/" id="links">dogMUD</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/play">Play</Nav.Link>
    </Nav.Item>
  </Nav>
          
    );
};
  
export default NavBar;