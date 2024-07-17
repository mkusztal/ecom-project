import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  getCartItems,
  increaseQuantity,
  removeFromCart,
} from "../../../redux/cartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXing } from "@fortawesome/free-brands-svg-icons";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import styles from "./SmallCart.module.scss";
import { Container, Button, ListGroup } from "react-bootstrap";

export const SmallCart: React.FC = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const handleRemove = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrease = (itemId: string) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecrease = (itemId: string) => {
    dispatch(decreaseQuantity(itemId));
  };

  console.log(cartItems);

  return (
    <Container className={`${styles.root}`}>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup className={`${styles.list}`}>
          {cartItems.map((item: IYerbamate) => (
            <ListGroup.Item key={item.id} className={`${styles.items}`}>
              {item.name} - ${item.price * item.quantity}
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => handleIncrease(item.id)}
                className="mx-2"
              >
                +
              </Button>
              <p>{item.quantity}</p>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => handleDecrease(item.id)}
                className="mx-2"
              >
                -
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleRemove(item.id)}
                className="mx-2"
              >
                <FontAwesomeIcon icon={faSquareXing} />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};
