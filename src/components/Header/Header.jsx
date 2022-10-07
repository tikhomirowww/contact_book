import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'

const Header = ({ handleShow }) => {
  return (
    <>
    <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
            <Button onClick={handleShow} variant='outline-dark'>Add Contact</Button>
        </Container>
      </Navbar>
    </>
  )
}

export default Header