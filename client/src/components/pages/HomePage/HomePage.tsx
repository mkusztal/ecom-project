import React, { useEffect } from "react";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { useDispatch, useSelector } from "react-redux";
import { fetchYerbamate, getYerbamate } from "../../../redux/yerbamateReducer";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./HomePage.module.scss";
import { HomePageSlider } from "../../features/HomePageSlider/HomePageSlider";

export const HomePage: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Container className={styles.container}>
        <Row className={`${styles.row}`}>
          <HomePageSlider />
        </Row>
        <Row className={`${styles.row}`}>
          <Col>
            <h1>What is Yerba mate?</h1>
            <p>
              Yerba mate or yerba-maté is a plant species of the holly genus
              Ilex native to South America. It was named by the French botanist
              Augustin Saint-Hilaire. The leaves of the plant can be steeped in
              hot water to make a beverage known as mate. Brewed cold, it is
              used to make tereré. Both the plant and the beverage contain
              caffeine.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <h3>Types of yerba mate</h3>
            <ul>
              <li>Argentinian Yerba Mate</li>
              <li>Paraguayan Yerba Mate</li>
              <li>Uruguayan Yerba Mate</li>
              <li>Brazilian Erva Mate (Chimarrão)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
