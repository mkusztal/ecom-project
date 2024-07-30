import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import styles from "./AboutUsPage.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AboutUsPage: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Container className={`${styles.container}`}>
        <Row className={`${styles.rows}`}>
          <Image
            src="images/yerba_slider_homepage3.jpg"
            alt="YerbaOfficial"
            className={`${styles.background}`}
          />
          <div>
            Something went wrong! That's not me!
            <FontAwesomeIcon
              icon={faArrowUp}
              className={`${styles.arrow_icon}`}
            />
          </div>
          <div className={`${styles.contact_info}`}>
            <h3>Would you like to get more information?</h3>
            <Link
              to={"/contact"}
              target="_blank"
              rel="noreferrer"
              className={`${styles.slide__link}`}
            >
              Contact us!
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsPage;
