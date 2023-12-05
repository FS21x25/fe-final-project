import React from "react";
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            OWLearn
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pembelajaran">Pembelajaran</Nav.Link>
              <Nav.Link href="/event">Event</Nav.Link>
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-info rounded-1">
                Sign Up
              </button>
              <Nav.Link href="/profile">
                <button className="btn btn-outline-info rounded-1 px-3">
                  Profile
                </button>
              </Nav.Link>
            </div>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
