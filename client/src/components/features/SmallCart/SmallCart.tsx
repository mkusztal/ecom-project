import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems, removeFromCart } from "../../../redux/cartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXing } from "@fortawesome/free-brands-svg-icons";
import { IYerbamate } from "../../../interfaces/IYerbamate";

export const SmallCart: React.FC = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const handleRemove = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  console.log(cartItems);

  return (
    <div className="small-cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item: IYerbamate) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleRemove(item.id)}>
                <FontAwesomeIcon icon={faSquareXing} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
