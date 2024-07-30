import React from "react";
import { Carousel, Image } from "react-bootstrap";
import styles from "./HomePageSlider.module.scss";
import { Link } from "react-router-dom";

export const HomePageSlider: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Carousel interval={4000}>
        <Carousel.Item className={`${styles.items}`}>
          <Image
            src="images/yerba_slider_homepage1.jpg"
            alt="YerbaOfficial"
            className={styles.background}
          />
          <Carousel.Caption>
            <h3>Let's see our products!</h3>
            <Link
              to={"/yerbamate"}
              target="_blank"
              rel="noreferrer"
              className={`${styles.slide__link}`}
            >
              Open products page
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.items}`}>
          <Image
            src="images/yerba_slider_homepage3.jpg"
            alt="YerbaOfficial"
            className={`${styles.background}`}
          />
          <Carousel.Caption>
            <h3>Our culture</h3>
            <Link
              to={"/aboutus"}
              target="_blank"
              rel="noreferrer"
              className={`${styles.slide__link}`}
            >
              About us!
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.items}`}>
          <Image
            src="images/contact_info.jpg"
            alt="YerbaOfficial"
            className={`${styles.background}`}
          />
          <Carousel.Caption>
            <h3>Would you like to get more information?</h3>
            <Link
              to={"/contact"}
              target="_blank"
              rel="noreferrer"
              className={`${styles.slide__link}`}
            >
              Contact us!
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
