import React, { Component } from "react";
import "bootstrap/js/src/collapse.js";
import { Link, BrowserRouter } from "react-router-dom";
import history from "../history";

import "../scss/MyNavbar.css";

export default class MyNavbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link
              className="navbar-brand"
              onClick={() => {
                history.push("/");
                window.location.reload();
              }}
            >
              <img className="logo" src="/store.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navItems"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navItems">
              <div className="navbar-nav">
                <Link
                  onClick={() => {
                    history.push("/");
                    window.location.reload();
                  }}
                  className="nav-link"
                >
                  Home
                </Link>
              </div>
            </div>
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}
