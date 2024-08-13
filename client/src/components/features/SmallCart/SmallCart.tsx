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
import { Container, Button, ListGroup, Image } from "react-bootstrap";

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

  return (
    <Container className={`${styles.root}`}>
      {cartItems.length > 0 ? (
        <ListGroup className={`${styles.list}`}>
          {cartItems.map((item: IYerbamate) => (
            <ListGroup.Item key={item.id} className={`${styles.items}`}>
              <Image
                src={`data:image/png;base64,${item.image}`}
                alt="small_product"
                className={`${styles.image_prodiuct}`}
              />
              <div>
                <p>{item.name}</p>
                <p>Total price: ${item.price * item.quantity}</p>
              </div>
              <div className={`${styles.div_buttons}`}>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleIncrease(item.id)}
                  className={`mx-2 ${styles.buttons}`}
                >
                  +
                </Button>
                <p>{item.quantity}</p>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleDecrease(item.id)}
                  className={`mx-2 ${styles.buttons}`}
                >
                  -
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleRemove(item.id)}
                  className={`mx-2 ${styles.buttons}`}
                >
                  <FontAwesomeIcon icon={faSquareXing} />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p className={`${styles.empty_text}`}>Your cart is empty</p>
      )}
    </Container>
  );
};
