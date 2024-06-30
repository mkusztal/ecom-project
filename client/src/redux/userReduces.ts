import { IUser } from "../interfaces/IUser";
import { initialState } from "./initialState";

export const getUser = (state: any): IUser => state.user;

// actions
const createActionName = (actionName: string) => `app/users/${actionName}`;
const LOG_IN = createActionName("LOG_IN");
const LOG_OUT = createActionName("LOG_OUT");

export const logIn = (payload: any) => ({
  type: LOG_IN,
  payload,
});

export const logOut = () => ({ type: LOG_OUT });

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload.email,
        token: action.payload.token,
      };
    case LOG_OUT:
      return null;
    default:
      return state;
  }
};
