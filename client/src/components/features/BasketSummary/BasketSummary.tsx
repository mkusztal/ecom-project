import React, { useState } from "react";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./BasketSummary.module.scss";
import { PaymentModal } from "../PaymentModal/PaymentModal";

type TBasketSummary = {
  cartItems: IYerbamate[];
};

export const BasketSummary: React.FC<TBasketSummary> = (props) => {
  const { cartItems } = props;
  const [showPaymentModal, setShowPaymentModalShow] = useState(false);

  // Add button navigate to payment

  const totalPrice =
    cartItems.length > 0
      ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;

  const handlePaymentModal = (): void => setShowPaymentModalShow(true);

  return (
    <div>
      <Container className={`${styles.root}`}>
        <div>
          <h3>Order summary</h3>
          <h6>Products:</h6>
          <div>
            {cartItems.length > 0 ? (
              cartItems.map((product, index) => (
                <div key={index}>
                  {product.name} {product.quantity}x
                </div>
              ))
            ) : (
              <Alert>
                <div>
                  <p>Your basket is empty!</p>
                  <Link to={"/yerbamate"}>Check our products!</Link>
                </div>
              </Alert>
            )}
          </div>
          <h4>Total price: ${totalPrice}</h4>
        </div>
        <Button
          className={`${styles.payment_process_link}`}
          onClick={handlePaymentModal}
        >
          Payment process
        </Button>

        <PaymentModal
          show={showPaymentModal}
          setShow={setShowPaymentModalShow}
        />
      </Container>
    </div>
  );
};
