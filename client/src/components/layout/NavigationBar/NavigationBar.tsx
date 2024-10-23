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
import { SmallCart } from "../../features/SmallCart/SmallCart";
import { getCartItems } from "../../../redux/cartReducer";
import { Link } from "react-router-dom";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const NavigationBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const localStoreUsers: IUser = useSelector(getUser);
  const cartItems = useSelector(getCartItems);

  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);

  return (
    <div className={`${styles.root}`}>
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
                <Nav className={`me-auto ${styles.nav}`}>
                  <NavDropdown title="Products" id="collapsible-nav-dropdown">
                    <NavDropdown.Item className={`${styles.dropdown_items}`}>
                      <Link
                        to={`/yerbamate`}
                        rel="stylesheet"
                        className={`${styles.links}`}
                      >
                        Yerba mate
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="accessories">
                      Accessories
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link
                    to={"/contact"}
                    rel="stylesheet"
                    className={`${styles.links}`}
                  >
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col className={`${styles.second_column}`}>
              <Dropdown show={show} onToggle={handleToggle}>
                <Dropdown.Toggle
                  className={`${styles.basket_dropdown_button}`}
                  id="dropdown-basic"
                >
                  <FontAwesomeIcon icon={faBasketShopping as IconProp} />
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
                  <Link
                    to={"/login"}
                    rel="stylesheet"
                    className={`${styles.links}`}
                  >
                    Login
                  </Link>
                )}
                {localStoreUsers !== null && (
                  <Link
                    to={"/logout"}
                    rel="stylesheet"
                    className={`${styles.links}`}
                  >
                    Logout
                  </Link>
                )}
                {localStoreUsers === null && (
                  <Link
                    to={"/register"}
                    rel="stylesheet"
                    className={`${styles.links}`}
                  >
                    Register
                  </Link>
                )}

                <Link
                  to={"/basket"}
                  rel="stylesheet"
                  className={`${styles.links}`}
                >
                  Basket
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Image
        src={`images/grass.png`}
        alt="grass"
        className={`${styles.grass_image}`}
      />
    </div>
  );
};
