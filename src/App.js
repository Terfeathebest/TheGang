import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Home from "./components/Home";
import Account from './components/Account'
import SignUp from "./components/SignUp";
class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
      </React.Fragment>
    );
  }
}

export default App;
