import { combineReducers, Store } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { initialState } from "./initialState";
import { clothesReducer } from "./clothesReducer";
import { configureStore } from "@reduxjs/toolkit";

/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param options The store configuration.
 * @devTools {boolean | DevToolsOptions} true - instead of using composeWithDevTools function
 *
 */

type RootState = ReturnType<typeof reducer>;

const subreducers = {
  clothes: clothesReducer,
};

const reducer = combineReducers(subreducers);

export const store: Store<RootState> = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk as ThunkMiddleware<RootState>),
  devTools: true, // or DevToolsOptions
});
