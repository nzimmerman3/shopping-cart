import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/index.scss";
import { Router } from "react-router-dom";
import history from "./history";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
