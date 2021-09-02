import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./Mirage/server";
import CartProvider from "./Context/CartContext";
import UserProvider from "./Context/UserContext";

if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
) {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
