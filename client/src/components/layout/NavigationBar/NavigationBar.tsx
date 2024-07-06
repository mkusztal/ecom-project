import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { IUser } from "../../../interfaces/IUser";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/userReduces";
import styles from "./NavigationBar.module.scss";

export const NavigationBar: React.FC = () => {
  const localStoreUsers: IUser = useSelector(getUser);

  return (
    <Navbar collapseOnSelect expand="lg" className={`${styles.root} wrap`}>
      <Container fluid className="d-flex flex-column">
        <Row className="w-100">
          <Col className="text-center">
            <Navbar.Brand href="/" className={`${styles.title} ms-3`}>
              Yours Yerba
            </Navbar.Brand>
          </Col>
        </Row>
        <Row className="w-100">
          <Col className="text-center d-flex flex-column justify-content-center align-items-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Products" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/yerbamate">
                    Yerba mate
                  </NavDropdown.Item>
                  <NavDropdown.Item href="accessories">
                    Accessories
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/aboutus" rel="stylesheet">
                  About us
                </Nav.Link>
                <Nav.Link href="/contact" rel="stylesheet">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-end">
            {localStoreUsers === null && (
              <Nav.Link href="/login" rel="stylesheet">
                Login
              </Nav.Link>
            )}
            {localStoreUsers !== null && (
              <Nav.Link href="/logout" rel="stylesheet">
                Logout
              </Nav.Link>
            )}
            <Nav.Link href="/register" rel="stylesheet">
              Register
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
