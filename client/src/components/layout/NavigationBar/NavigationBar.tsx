import React, { useState } from "react";
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
import { getUser } from "../../../redux/userReducer";
import styles from "./NavigationBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";
import { SmallCart } from "../../features/SmallCart/SmallCart";
import { getCartItems } from "../../../redux/cartReducer";
import { Link } from "react-router-dom";

export const NavigationBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const localStoreUsers: IUser = useSelector(getUser);
  const cartItems = useSelector(getCartItems);

  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);

  return (
    <div>
      {/* expand="lg"  */}
      <Navbar collapseOnSelect className={`${styles.navbar} wrap`}>
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
                  {/* <Nav.Link href="/aboutus" rel="stylesheet">
                    About us
                  </Nav.Link> */}
                  <Nav.Link href="/contact" rel="stylesheet">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col className={`${styles.second_column}`}>
              <Dropdown show={show} onToggle={handleToggle}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  <FontAwesomeIcon icon={faCreativeCommons} />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className={
                    cartItems.length > 0
                      ? `${styles.dropdown_menu_with_items}`
                      : `${styles.dropdown_menu_empty}`
                  }
                >
                  <SmallCart />
                  <Dropdown.Divider />
                  <div className={`${styles.div_basket_link}`}>
                    <Link
                      to={`/basket`}
                      className={`${styles.basket_link}`}
                      onClick={handleClose}
                    >
                      Open basket
                    </Link>
                  </div>
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
                <Nav.Link href="/basket" rel="stylesheet">
                  Basket
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Image
        src={`images/grass.jpg`}
        alt="grass"
        className={`${styles.grass_image}`}
      />
    </div>
  );
};
