import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./screen/homePage";

import Login from "./screen/login";
import Register from "./screen/register";

function App() {
  return (
    <BrowserRouter>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </BrowserRouter>
  );
}

export default App;
