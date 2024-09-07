import React from "react";
import { Image } from "react-bootstrap";
import styles from "./ProductImages.module.scss";

type TProductImages = {
  image: string;
};

export const ProductImages: React.FC<TProductImages> = (props) => {
  const { image } = props;
  return (
    <div className={`${styles.root}`}>
      {image && (
        <Image src={`data:image/png;base64,${image}`} alt="defaultImage" />
      )}
    </div>
  );
};
