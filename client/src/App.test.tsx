import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

const mockStore = configMockStore();
const store = mockStore({});

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <App />
      </BrowserRouter>
    </Provider>,
  );

  const navbar = screen.getByRole("navigation");
  const linkElement = within(navbar).getByText("Yours Yerba");
  expect(linkElement).toBeInTheDocument();
});
