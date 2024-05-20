import { initialState } from "./initialState";
import { API_URL } from "../config/urls";
import { IYerbamate } from "../interfaces/IYerbamate";
import { Dispatch } from "redux";

export const getYerbamate = ({ yerbamate }: any): IYerbamate[] => yerbamate;

const createActionName = (actionName: string) => `app/yerbamate/${actionName}`;
const GET_YERBAMATE = createActionName("GET_YERBAMATE");

export const fetchYerbamate = (): any => {
  return (dispatch: Dispatch) => {
    fetch(API_URL + "api/yerbamate")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_YERBAMATE,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching yerbamate data: ", error);
      });
  };
};

export const yerbamateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_YERBAMATE:
      return action.payload;
    default:
      return state;
  }
};
