import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavButton from "../buttons/NavButton";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../../img/logo.png";
import { Link, NavLink } from "react-router-dom";

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
            <Nav.Link eventKey="1" as={NavLink} to="/projects" exact className="mx-auto px-4">
              Projects
            </Nav.Link>
						<Nav.Link eventKey="2" as={NavLink} to="/contact" exact className="mx-auto px-4">
              Contact
            </Nav.Link>
						<Nav.Link eventKey="3" as={NavLink} to="/" exact className="mx-auto px-4 d-block d-sm-none">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
