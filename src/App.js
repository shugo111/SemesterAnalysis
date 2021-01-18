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
import Api from "./screen/api";
import Scrapper from "./screen/scrapper";
import Apidoc from "./screen/apiDoc";
import ScrapperDoc from "./screen/scrapperDoc";

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
        <Route path="/bg/:dept/:scheme" component={Bgg} />
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/api">
          <Api />
        </Route>
        <Route path="/scrapper">
          <Scrapper />
        </Route>
        <Route path="/scrapperdoc">
          <ScrapperDoc />
        </Route>
        <Route path="/apidoc">
          <Apidoc />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
