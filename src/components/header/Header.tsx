import React from "react";
import {
  Button,
  Dropdown,
  Form,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import logo from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar className="header" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">HOME</Nav.Link>
              <Nav.Link href="#action2">EXPLORE</Nav.Link>
              <NavDropdown title="BECOME A" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Freelancer </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Client</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  English
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Portugues</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button>JOIN/LOGIN</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
