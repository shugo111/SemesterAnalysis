import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./screen/homePage";
import Home from "./screen/home";
import Login from "./screen/login";
import Register from "./screen/register";
import Agg from "./screen/agg";

class App extends Component {
  state = {
    department: "",
    semester: "",
    scheme: "",
  };
  changeData(){
    this.setState({
      
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/resultanalysis/:dept/:sem/:scheme" component={HomePage} />
        <Route path="/agg" component={Agg} />
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
