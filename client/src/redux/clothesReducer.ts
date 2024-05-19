import { initialState } from "./initialState";
import { API_URL } from "../config/urls";
import { IClothes } from "../interfaces/IClothes";
import { Dispatch } from "redux";

export const getClothes = ({ clothes }: any): IClothes[] => clothes;

const createActionName = (actionName: string) => `app/clothes/${actionName}`;
const GET_CLOTHES = createActionName("GET_CLOTHES");

export const fetchClothes = (): any => {
  return (dispatch: Dispatch) => {
    fetch(API_URL + "api/clothes")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_CLOTHES,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching clothes data: ", error);
      });
  };
};

export const clothesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CLOTHES:
      return action.payload;
    default:
      return state;
  }
};
