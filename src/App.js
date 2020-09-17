import React from "react";
import MyNavbar from "./components/MyNavbar";
import Content from "./components/Content";
import "./scss/App.css";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyNavbar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" component={Content} exact />
            <Route path="/checkout" component={CheckoutForm} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
