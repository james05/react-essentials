import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

test("renders an h1", () => {
  const {getByText} = render(<Header name="Eve" />);

  const h1 = getByText(/Eve's Kitchen/);

  expect(h1).toHaveTextContent("Eve's Kitchen");
});