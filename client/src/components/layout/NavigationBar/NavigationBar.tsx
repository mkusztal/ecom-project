import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavigationBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info">
      <Navbar.Brand href="/" className="ms-3">
        Yours Yerba
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Products" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/yerba">Yerba mate</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="accessories">Accessories</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/aboutme">About us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
