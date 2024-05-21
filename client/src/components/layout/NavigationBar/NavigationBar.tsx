import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

export const NavigationBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info wrap">
      <Container fluid className="d-flex flex-column">
        <Row className="w-100">
          <Col className="text-center">
            <Navbar.Brand href="/" className="ms-3">
              Yours Yerba
            </Navbar.Brand>
          </Col>
        </Row>
        <Row className="w-100">
          <Col className="text-center d-flex flex-column justify-content-center align-items-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Products" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/yerba">Yerba mate</NavDropdown.Item>
                  <NavDropdown.Item href="accessories">
                    Accessories
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/aboutme" rel="stylesheet">
                  About us
                </Nav.Link>
                <Nav.Link href="/contact" rel="stylesheet">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
