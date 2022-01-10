import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

jest.mock("../articles/services/ArticleApi", () => ({
  __esModule: true,
  default: {
    listArticles() {
      return new Promise((resolve, reject) => {
        resolve([]);
      });
    },
  },
}));

test("should contains space flight news", async () => {
  const { getByDisplayValue } = render(<App />);

  waitFor(() => getByDisplayValue("Space"));
  const linkElement = screen.getByText(/Space Flight News/i);
  expect(linkElement).toBeInTheDocument();
});
