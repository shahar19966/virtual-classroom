import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";
import { Link } from 'react-router-dom';



export const Header = () => {
  return( <Navbar bg="primary" expand="lg" variant="dark">
  <Container >
      <Navbar.Brand >
        <Link to='/'>Virtual Classroom</Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="m-auto">
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
        </Nav>
      <Nav
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/patients">patients  </Nav.Link>
        <NavDropdown title='#TO DO {Add name}' id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
           Log out 
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
};
