import React from "react";
import { Carousel, Image } from "react-bootstrap";
import styles from "./ProductsSlider.module.scss";

type TProductsSlider = {
  image: string;
};

export const ProductsSlider: React.FC<TProductsSlider> = (props) => {
  const { image } = props;
  return (
    <div className={`${styles.root}`}>
      <Carousel interval={5000}>
        <Carousel.Item>
          {image && <Image src={`data:image/png;base64,${image}`} alt="1" />}
        </Carousel.Item>

        <Carousel.Item>
          {image && <Image src={`data:image/png;base64,${image}`} alt="2" />}
        </Carousel.Item>

        <Carousel.Item>
          {image && <Image src={`data:image/png;base64,${image}`} alt="3" />}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
