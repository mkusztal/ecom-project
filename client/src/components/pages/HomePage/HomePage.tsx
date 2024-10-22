import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./HomePage.module.scss";
import { HomePageSlider } from "../../features/HomePageSlider/HomePageSlider";

export const HomePage: React.FC = () => {
  return (
    <Container className={`${styles.root} ${styles.container}`}>
      <Row className={`${styles.row}`}>
        <Col>
          <h1 className={`${styles.title}`}>What is Yerba mate?</h1>
          <p className={`${styles.p}`}>
            Yerba mate or yerba-maté is a plant species of the holly genus Ilex
            native to South America. It was named by the French botanist
            Augustin Saint-Hilaire. The leaves of the plant can be steeped in
            hot water to make a beverage known as mate. Brewed cold, it is used
            to make tereré. Both the plant and the beverage contain caffeine.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <h3 className={`${styles.title}`}>Types of yerba mate</h3>
          <ul className={`${styles.li}`}>
            <li>Argentinian Yerba Mate</li>
            <li>Paraguayan Yerba Mate</li>
            <li>Uruguayan Yerba Mate</li>
            <li>Brazilian Erva Mate (Chimarrão)</li>
          </ul>
        </Col>
      </Row>
      <Row className={`${styles.row}`}>
        <HomePageSlider />
      </Row>
    </Container>
  );
};
