import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Portfolio from "./components/Portfolio";
import Calculator from "./components/Calculator";
import Rick from "./components/Rick";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Calculator",
    element: <Calculator />,
  },
  {
    path: "/Rick",
    element: <Rick />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
