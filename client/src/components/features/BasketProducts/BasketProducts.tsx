import React from "react";
import { Button, ListGroup, Image } from "react-bootstrap";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXing } from "@fortawesome/free-brands-svg-icons";
import styles from "./BasketProducts.module.scss";

type BasketProductsProps = {
  cartItems: IYerbamate[];
};

export const BasketProducts: React.FC<BasketProductsProps> = (props) => {
  const { cartItems } = props;

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
    <div className={`${styles.root}`}>
      {cartItems.length === 0 ? (
        <p className={`${styles.empty_text}`}>Promotion</p>
      ) : (
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
      )}
    </div>
  );
};
