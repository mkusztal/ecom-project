import { combineReducers } from "redux";
// import { thunk, ThunkMiddleware } from "redux-thunk";
// import { initialState } from "./initialState";
import { yerbamateReducer } from "./yerbamateReducer";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { loadState, saveState } from "../utils/localstore";
import { thunk } from "redux-thunk";
import { initialState } from "./initialState";

/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param options The store configuration.
 * @param devTools {boolean | DevToolsOptions} true - instead of using composeWithDevTools function
 *
 */

// it generate issue Dispatch -> redux-thunk
// type RootState = ReturnType<typeof reducer>;

const subreducers = {
  yerbamate: yerbamateReducer,
  user: userReducer,
  cart: cartReducer,
};

const reducer = combineReducers(subreducers);
const preloadedState = loadState() || initialState;

// export const store: Store<RootState> = configureStore({
//   reducer,
//   preloadedState: initialState,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(thunk as ThunkMiddleware<RootState>),
//   devTools: true, // or DevToolsOptions
// });

export const store = configureStore({
  reducer,
  preloadedState, //: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
  devTools: true,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
