import React from "react";
import { Carousel, Image } from "react-bootstrap";
import styles from "./HomePageSlider.module.scss";
import { CommonButton } from "../../common/CommonButton";

export const HomePageSlider: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Carousel interval={5000}>
        <Carousel.Item>
          <Image
            src="images/yerba2.jpg"
            alt="YerbaOfficial"
            className={styles.background}
          />
          <Carousel.Caption>
            {/* <Col xs={6} md={6} className={styles.first_row_colum}> */}
            <h2>Hello! I will help you to find your favourite yerba mate...</h2>
            <CommonButton type="button" text="Read more" />
            {/* </Col> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="images/yerba2.jpg"
            alt="YerbaOfficial"
            className={styles.background}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="images/yerba2.jpg"
            alt="YerbaOfficial"
            className={styles.background}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
