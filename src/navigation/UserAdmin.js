import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, NavItem, Form, FormControl, Button } from "react-bootstrap";

class UserNav extends React.Component {
  render() {
    return (
      <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-primary justify-content-between">
        <Navbar.Brand href="/">EAT & GO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/schedule">SCHEDULE</Nav.Link>
            <NavDropdown title="FOOD LIST" id="basic-nav-dropdown">
              <NavDropdown.Item href="/monday">Monday</NavDropdown.Item>
              <NavDropdown.Item href="/tuesday">Tuesday</NavDropdown.Item>
              <NavDropdown.Item href="/wednesday">Wednesday</NavDropdown.Item>
              <NavDropdown.Item href="/thursday">Thursday</NavDropdown.Item>
              <NavDropdown.Item href="/friday">Friday</NavDropdown.Item>
              <NavDropdown.Item href="/saturday">Saturday</NavDropdown.Item>
              <NavDropdown.Item href="/sunday">Sunday</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Select day to display food</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/equipment">EQUIPMENT</Nav.Link>
            <Nav.Link href="/contactus">CONTACT US</Nav.Link>
            <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
          </Nav>



          <Form inline  className="mr-auto">
            <Nav.Link href="\home">LOGOUT</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default UserNav;