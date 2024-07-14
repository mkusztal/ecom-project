import React from "react";
import { Button, Container, Form } from "react-bootstrap";

type TProductDetails = {
  title: string;
  price: number;
  size: string;
  type: string;
};

export const ProductDetails: React.FC<TProductDetails> = (props) => {
  const { title, price, size, type } = props;
  return (
    <div>
      <Container>
        <div>
          <h2 className={`mb-4`}>{title}</h2>
          <h4 className={`mb-4`}>${price}</h4>
          <h6 className={`mb-5`}>Type: {type}</h6>
          <Form.Select className={`mb-5`}>
            <option>Choose size of the yerbamate</option>
            <option value={1}>{size} kg</option>
          </Form.Select>
        </div>
        <Button className={`w-100`}>Add to cart</Button>
      </Container>
    </div>
  );
};
