import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >
        <Link to={"/"}>
        <img
          alt=""
          src="https://i.postimg.cc/NMr6DHTw/cafe-logo-png-1.png"
          width="35"
          height="35"
          className="d-inline-block align-top"
        />
        </Link>{' '}
        Le Cafe
        
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header