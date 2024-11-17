import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductCards } from "./ProductCards";
import { API_URL } from "../../../config/urls";

describe("Product Cards Component", () => {
  const productProps = {
    id: "1",
    name: "Yerba Mate",
    price: 25,
    type: "Beverage",
    image: btoa("images/yerba1"),
  };

  test("renders ProductCards with correct props", () => {
    render(
      <BrowserRouter>
        <ProductCards {...productProps} />
      </BrowserRouter>,
    );

    // Check if the name is displayed
    expect(screen.getByText("Yerba Mate")).toBeInTheDocument();

    // Check if the price is displayed
    expect(screen.getByText("25$")).toBeInTheDocument();

    // Check if the type is displayed
    expect(screen.getByText("Beverage")).toBeInTheDocument();

    // Check if the image is rendered
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      `data:image/jpeg;base64,${productProps.image}`,
    );
    expect(image).toHaveAttribute("alt", "");
  });

  test("rebders a link to the correct URL", () => {
    render(
      <BrowserRouter future={{ v7_startTransition: true }}>
        <ProductCards {...productProps} />
      </BrowserRouter>,
    );
    // screen.debug();

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", `/yerbamate/1`);
  });
});
