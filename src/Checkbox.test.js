import { fireEvent, render } from "@testing-library/react";
import React from "react";
import CheckBox from "./Checkbox";

test("Selecting checkbox", () => {
  const { getByLabelText } = render(<CheckBox />);
  const checkbox = getByLabelText(/not checked/);

  fireEvent.click(checkbox);

  expect(checkbox.checked).toEqual(true);
});