import React, { useEffect } from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import styles from "./AboutUsPage.module.scss";
import { Link } from "react-router-dom";

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scaleFactor = Math.max(0.2, 1 - scrollY / 1000);

      document
        .querySelectorAll<HTMLElement>(".verticalLine, .horizontalLine")
        .forEach((line) => {
          if (line.classList.contains("horizontalLine")) {
            line.style.height = `${scaleFactor * 100}%`;
          } else {
            line.style.width = `${scaleFactor * 100}%`;
          }
        });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.root}`}>
      <Container className={`${styles.container}`}>
        <Row className={`${styles.rows}`}>
          <Col className={`${styles.col}`}>
            <Image
              src={`images/yerba2.jpg`}
              alt="YerbaOfficial"
              className={`${styles.images}`}
            />
          </Col>
          <Col className={`${styles.col}`}>
            <Image
              src={`images/yerba2.jpg`}
              alt="YerbaOfficial"
              className={`${styles.images}`}
            />
          </Col>
        </Row>

        <Row className={`${styles.rows} ${styles.square_row}`}>
          <Col xs={6} className={`${styles.col} mb-5`}>
            <h3>Contact with us</h3>
            <Link to={"/contact"} target="_blank" rel="noreferrer">
              Contact us
            </Link>
          </Col>
          <Col xs={6} className={`${styles.col} mb-5`}>
            <h3>Contact with us</h3>
            <Link to={"/contact"} target="_blank" rel="noreferrer">
              Contact us
            </Link>
          </Col>
          {/* Add two lines verical and horizontal */}
          <div className={`${styles.verticalLine}`}></div>
          <div className={`${styles.horizontalLine}`}></div>
          <Col xs={6} className={`${styles.col}`}>
            <h3>Contact with us</h3>
            <Link to={"/contact"} target="_blank" rel="noreferrer">
              Contact us
            </Link>
          </Col>
          <Col xs={6} className={`${styles.col}`}>
            <h3>Contact with us</h3>
            <Link to={"/contact"} target="_blank" rel="noreferrer">
              Contact us
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
