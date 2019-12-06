import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ShowButtons from "./components/ShowButtons";

test("Show if button (handleBall) clicked", () => {
  const oneClick = { button: 1 };
  fireEvent.click(ball, oneClick);
});

test("Find instances of ball", () => {
  const { getAllByText } = render(<App />);
  getAllByText(/ball/i);
});