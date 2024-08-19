import React from "react";
import { Carousel, Image, Button } from "react-bootstrap";
import styles from "./HomePageSlider.module.scss";

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
            <Button className={styles.first_slide_button}>Read more</Button>
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
