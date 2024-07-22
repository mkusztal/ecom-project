import React from "react";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

type BasketSummaryProps = {
  cartItems: IYerbamate[];
};

export const BasketSummary: React.FC<BasketSummaryProps> = (props) => {
  const { cartItems } = props;

  // sum all products price
  // Add button navigate to payment

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <Container>
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
        <Link to={"/"}>Process payment</Link>
      </Container>
    </div>
  );
};
