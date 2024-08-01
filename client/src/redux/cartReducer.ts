import { IYerbamate } from "../interfaces/IYerbamate";
import { initialState } from "./initialState";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const getCartItems = ({ cart }: any): IYerbamate[] | [] => cart;

export const addToCart = (item: IYerbamate) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId: string) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const increaseQuantity = (itemId: string) => ({
  type: INCREASE_QUANTITY,
  payload: itemId,
});

export const decreaseQuantity = (itemId: string) => ({
  type: DECREASE_QUANTITY,
  payload: itemId,
});

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.find(
        (item: IYerbamate) => item.id === action.payload.id,
      );
      if (itemInCart) {
        return state.map((item: IYerbamate) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case INCREASE_QUANTITY:
      return state.map((item: IYerbamate) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    case DECREASE_QUANTITY:
      return state.map((item: IYerbamate) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item,
      );
    case REMOVE_FROM_CART:
      return state.filter((item: IYerbamate) => item.id !== action.payload);
    default:
      return state;
  }
};
