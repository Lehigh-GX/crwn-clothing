import React from "react";
import "./App.css";
import HomePage from "./pages/Homepage/homePage.jsx";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Shop/shop.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
