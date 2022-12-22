import React from "react";
import "./navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../repositories/navigationLinks";
import Person from "../../images/myPicture.jpg";

function createLinks() {
  return navigationLinks.map((e, index) => (
    <Nav.Link key={index} href={e.ref}>
      {e.name}
    </Nav.Link>
  ));
}

function NavigationBar() {
  return (
    <div id="home">
      <Navbar
        className="navigation__container"
        style={{
          zIndex: "4",
          position: "fixed",
          top: "0",
          width: "100%",
        }}
        collapseOnSelect
        expand="lg"
      >
        <img
          className="navbar-userIcon"
          src={Person}
          height="50px"
          width="50px"
          alt="User foto"
        />
        <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
          Cetin ARSLAN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginLeft: "1rem",
            borderColor: "none",
          }}
        >
          <Nav className="nav nav-pills me-3">
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
