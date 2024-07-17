import React from "react";
import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  Row,
} from "react-bootstrap";
import { IUser } from "../../../interfaces/IUser";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/userReduces";
import styles from "./NavigationBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";
import { SmallCart } from "../../features/SmallCart/SmallCart";

export const NavigationBar: React.FC = () => {
  const localStoreUsers: IUser = useSelector(getUser);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className={`${styles.navbar} wrap`}>
        <Container fluid className="d-flex flex-column">
          <Row className="w-100">
            <Col className="text-center">
              <Navbar.Brand href="/" className={`${styles.title} ms-3`}>
                Yours Yerba
              </Navbar.Brand>
            </Col>
          </Row>
          <Row className={`${styles.second_row}`}>
            <Col className={`${styles.first_column}`}>
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
            <Col className={`${styles.second_column}`}>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  <FontAwesomeIcon icon={faCreativeCommons} />
                </Dropdown.Toggle>

                <Dropdown.Menu className={`${styles.dropdown_menu}`}>
                  <SmallCart />
                </Dropdown.Menu>
              </Dropdown>
              <div className={`${styles.login_system}`}>
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
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Image
        src="images/grass.jpg"
        alt="grass"
        className={`${styles.grass_image}`}
      />
    </div>
  );
};
