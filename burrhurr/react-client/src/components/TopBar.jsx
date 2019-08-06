import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import {NavBarList,NavBarItem} from '../Styled/styledComps.jsx'
var TopBar = function (){
  // return (
  //   <NavBarList>
  //     <NavBarItem>
  //       Home
  //     </NavBarItem>
  //     <NavBarItem>
  //       Calculators
  //     </NavBarItem>
  //     <NavBarItem>
  //       Recipe Maker
  //     </NavBarItem>
  //     <NavBarItem>
  //       Recipe Guide
  //     </NavBarItem>
  //   </NavBarList>
  // )
  return (
  <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Burr Hurr</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#recipe">Recipe Builder</Nav.Link>
      <NavDropdown title="Calculators" id="basic-nav-dropdown">
        <NavDropdown.Item href="#calculator/3.1">IBU</NavDropdown.Item>
        <NavDropdown.Item href="#calculator/3.2">Gravity</NavDropdown.Item>
        <NavDropdown.Item href="#calculator/3.3">Something</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>);
}
export default TopBar;