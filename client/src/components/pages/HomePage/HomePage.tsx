import React, { useEffect } from "react";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { useDispatch, useSelector } from "react-redux";
import { fetchYerbamate, getYerbamate } from "../../../redux/yerbamateReducer";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const yerbamateData: IYerbamate[] = useSelector(getYerbamate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYerbamate());
  }, [dispatch]);

  console.log("yerbamateData", yerbamateData);

  return (
    <Container className={styles.container}>
      <Row className="mx-5 d-flex justify-content-end">
        <Image
          src="images/yerba2.jpg"
          alt="YerbaOfficial"
          className={styles.background}
        />
        <Col xs={6} md={6} className={styles.columns}>
          <h2>Hello! I will help you to find your favourite yerba mate...</h2>
          <Button className={styles.button}>Read more</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h1>What is Yerba mate?</h1>
          <p>
            Yerba mate or yerba-maté is a plant species of the holly genus Ilex
            native to South America. It was named by the French botanist
            Augustin Saint-Hilaire. The leaves of the plant can be steeped in
            hot water to make a beverage known as mate. Brewed cold, it is used
            to make tereré. Both the plant and the beverage contain caffeine.
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
  );
};
