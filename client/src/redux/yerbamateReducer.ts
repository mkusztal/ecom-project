import { initialState } from "./initialState";
import { API_URL } from "../config/urls";
import { IYerbamate } from "../interfaces/IYerbamate";
import { Dispatch } from "redux";
import { UnknownAction } from "redux";
export const getYerbamate = ({ yerbamate }: any): IYerbamate[] => yerbamate;
export const getSingleYerbamate = ({ yerbamate }: any): IYerbamate => yerbamate;

const createActionName = (actionName: string) => `app/yerbamate/${actionName}`;
const GET_ALL_YERBAMATE = createActionName("GET_ALL_YERBAMATE");
const GET_ONE_YERBAMATE = createActionName("GET_ONE_YERBAMATE");

export const fetchYerbamate = (): any => {
  return (dispatch: Dispatch) => {
    fetch(API_URL + "api/yerbamate")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_ALL_YERBAMATE,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching yerbamate data: ", error);
      });
  };
};

export const fetchOneYerbamate = (id: string) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(API_URL + `api/yerbamate/${id}`);
      const data = await res.json();
      dispatch({
        type: GET_ONE_YERBAMATE,
        payload: data,
      });
    } catch (err) {
      console.error("Error fetching single product: ", err);
    }
  };
};

export const yerbamateReducer = (
  state = initialState,
  action: UnknownAction,
) => {
  switch (action.type) {
    case GET_ALL_YERBAMATE:
      return action.payload;
    case GET_ONE_YERBAMATE:
      return action.payload;
    default:
      return state;
  }
};
