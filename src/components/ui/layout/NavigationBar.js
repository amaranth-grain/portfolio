import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavButton from "../buttons/NavButton";
import Logo from "../../../img/logo.png";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="/" className="mx-auto logo-container py-0">
          <img
            src={Logo}
            alt="Blocky Aqua C as Site Logo"
            width="30"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* Nav.Link wrapper necessary for mobile menu to collapse on click. */}
            <Nav.Link eventKey="1">
              <NavButton name="About" url="/" />
            </Nav.Link>
            <Nav.Link eventKey="2">
              <NavButton name="Projects" url="/projects" />
            </Nav.Link>
            <Nav.Link eventKey="3">
              <NavButton name="Contact" url="/contact" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
