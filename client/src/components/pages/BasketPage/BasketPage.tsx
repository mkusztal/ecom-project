import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./BasketPage.module.scss";
import { BasketProducts } from "../../features/BasketProducts/BasketProducts";

import { getCartItems } from "../../../redux/cartReducer";
import { useSelector } from "react-redux";
import { BasketSummary } from "../../features/BasketSummary/BasketSummary";
import { ProductCarousel } from "../../features/ProductCarousel/ProductCarousel";

export const BasketPage: React.FC = (props) => {
  const cartItems = useSelector(getCartItems);

  return (
    <Container className={`${styles.container}`}>
      <Row>
        <Col sm={9} className={`my-3 ${styles.basket_products_col}`}>
          <BasketProducts cartItems={cartItems} />
        </Col>
        <Col sm={3} className={`${styles.basket_summary_col}`}>
          <BasketSummary cartItems={cartItems} />
        </Col>
      </Row>
      <Row>
        <ProductCarousel />
      </Row>
    </Container>
  );
};
