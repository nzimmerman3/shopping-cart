import React from "react";
import MyNavbar from "./components/MyNavbar";
import Content from "./components/Content";
import "./scss/App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyNavbar />
        <div className="container-fluid">
          <Content />
        </div>
        <footer className="footer">
          <div
            className="text-muted"
            style={{ paddingBottom: "0px", marginBottom: "0" }}
          >
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/vitaly-gorbachev"
              title="Vitaly Gorbachev"
            >
              Vitaly Gorbachev
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
