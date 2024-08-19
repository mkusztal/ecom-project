import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styles from "./ProductDetails.module.scss";
import { SubmitButton } from "../../common/SubmitButton";

type TProductDetails = {
  title: string;
  price: number;
  size: string;
  type: string;
  handleClick: () => void;
};

export const ProductDetails: React.FC<TProductDetails> = (props) => {
  const { title, price, size, type, handleClick } = props;
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined,
  );

  const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div className={`${styles.root}`}>
      <Container>
        <div className={`${styles.product_details}`}>
          <p className={`${styles.title}`}>{title}</p>
          <p className={`${styles.price}`}>${price}</p>
          <p className={`${styles.type}`}>Type: {type}</p>
          <Form.Select
            className={`${styles.select_options}`}
            onChange={handleChangeSize}
          >
            <option>Choose size of the yerbamate</option>
            <option value={1}>{size} kg</option>
          </Form.Select>
        </div>
      </Container>
      <SubmitButton
        type={"button"}
        text={"Add to cart"}
        onClick={handleClick}
        disabled={!selectedSize}
      />
    </div>
  );
};
