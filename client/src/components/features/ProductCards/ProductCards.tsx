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
          className={`${styles.image}`}
        />
        <Card.Body>
          <Card.Title className={`${styles.card_title}`}>{name}</Card.Title>
          <Card.Text className={`${styles.card_text}`}>{type}</Card.Text>
          <Card.Text className={`${styles.card_text}`}>{price}$</Card.Text>
        </Card.Body>
      </Card.Link>
    </Card>
  );
};
