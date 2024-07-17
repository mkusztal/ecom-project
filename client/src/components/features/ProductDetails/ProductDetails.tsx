import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

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
    <div>
      <Container>
        <div>
          <h2 className={`mb-4`}>{title}</h2>
          <h4 className={`mb-4`}>${price}</h4>
          <h6 className={`mb-5`}>Type: {type}</h6>
          <Form.Select className={`mb-5`} onChange={handleChangeSize}>
            <option>Choose size of the yerbamate</option>
            <option value={1}>{size} kg</option>
          </Form.Select>
        </div>
      </Container>
      <Button
        className={`w-100`}
        onClick={handleClick}
        disabled={!selectedSize}
      >
        Add to cart
      </Button>
    </div>
  );
};
