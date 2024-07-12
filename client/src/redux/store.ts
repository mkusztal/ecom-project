import { combineReducers, Store } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import { initialState } from "./initialState";
import { yerbamateReducer } from "./yerbamateReducer";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReduces";

/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param options The store configuration.
 * @devTools {boolean | DevToolsOptions} true - instead of using composeWithDevTools function
 *
 */

type RootState = ReturnType<typeof reducer>;

const subreducers = {
  yerbamate: yerbamateReducer,
  user: userReducer,
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

export type AppDispatch = typeof store.dispatch;
