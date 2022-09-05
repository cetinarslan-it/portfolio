import React from 'react'
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'
import './navigation.css'

function createLinks(){
  return navigationLinks.map((e, idx) => (
    <Nav.Link style={{margin: '1rem' }} key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}

function NavigationBar() {

  return (
    <div id="home">
      <Navbar className="navigation__container" expand="md">
        <Navbar.Brand style={{marginLeft: '2rem'}} href="#home">Cetin Arslan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse style= {{justifyContent: 'flex-end', marginRight: '1rem' }}>
          <Nav className="links" style={{margin: '0rem' }}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar