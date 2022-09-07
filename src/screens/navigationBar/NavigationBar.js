import React from "react";
import "./navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";

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
          zIndex: "2",
          position: "fixed",
          top: "0",
          width: "100%",
        }}
        collapseOnSelect
        expand="md"
      >
        <Navbar.Brand style={{ marginLeft: "2rem" }} href="#home">
          Cetin ARSLAN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginRight: "1rem",
            borderColor: "none",
          }}
        >
          <Nav className="links">
            {createLinks()}
            <a style={{ margin: "0 1rem" }} href="mailto:cetinarslan.se@gmail.com">
              <img
                src="https://www.freeiconspng.com/uploads/white-envelope-icon-png-15.jpg"
                width="50"
                alt="white envelope icon png"
              />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
