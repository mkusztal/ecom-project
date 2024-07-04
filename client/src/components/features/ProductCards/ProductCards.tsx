import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ProductCards.module.scss";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  type: string;
  image: string;
};

export const ProductCards: React.FC<ProductProps> = (props) => {
  const { id, name, price, type, image } = props;
  return (
    <Card className={`${styles.card}`}>
      <Card.Link href={`/yerbamate/${id}`} className={`${styles.link}`}>
        <Card.Img
          variant="top"
          src={`data:image/jpeg;base64,${image}`}
          width={30}
          height={200}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <Card.Text>{price}$</Card.Text>
        </Card.Body>
      </Card.Link>
    </Card>
  );
};
