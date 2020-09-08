import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./screen/homePage";
import Home from "./screen/home";
import Login from "./screen/login";
import Register from "./screen/register";
import Agg from "./screen/agg";
import Aggr from "./screen/aggr";
import Bgg from "./screen/bgg";
import Bggr from "./screen/bggr";

class App extends Component {
  state = {
    department: "",
    semester: "",
    scheme: "",
  };
  changeData() {
    this.setState({});
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/home">
          <Home page="resultanalysis" />
        </Route>
        <Route path="/agg">
          <Aggr page="ag" />
        </Route>
        <Route path="/Bgg">
          <Bggr page="bg" />
        </Route>
        <Route path="/resultanalysis/:dept/:sem/:scheme" component={HomePage} />
        <Route path="/ag/:dept/:scheme" component={Agg} />
        <Route path="/bg/:dept/:sem/:scheme" component={Bgg} />
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
