import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "./app/store";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText(/the home page/i)).toBeInTheDocument();
});
