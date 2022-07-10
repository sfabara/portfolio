import React from "react";
import ReactDOM from "react-dom";
//React Router
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./scroll"

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
  ,
  document.getElementById("root")
);

