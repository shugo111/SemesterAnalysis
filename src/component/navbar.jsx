import React, { Component } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Nav extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <>
        <ul id="profile" className="dropdown-content">
          <li>
            <a href="#!">Log-Out</a>
          </li>
        </ul>
        <nav className="navbar">
          <div className="nav-wrapper">
            <Link
              to="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </Link>
            <Link to="/home" className="brand-logo">
              <img
                src={require("../images/logo.png")}
                alt="logo"
                style={{ width: "10%" }}
              />
              Result Analysis
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a className="dropdown-trigger" href="#!" data-target="profile">
                  abc@cmrit.ac.in
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="">
                <img
                  src={require("../images/logo.png")}
                  alt="logo"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </li>
          <li>
            <Link to="/home">
              <i className="material-icons">cloud</i>Semester Ananlysis
            </Link>
            <Link to="/agg">
              <i className="material-icons">cloud</i>Academic Performance
            </Link>
            <Link to="/bgg">
              <i className="material-icons">cloud</i>Eligibility List
            </Link>
            <Link to="/api">
              <i className="material-icons">cloud</i>Api
            </Link>
            <Link to="/scrapper">
              <i className="material-icons">cloud</i>Scrapper
            </Link>
            <Link to="/scrapperdoc">
              <i className="material-icons">cloud</i>Scrapper Document
            </Link>
            <Link to="/apidoc">
              <i className="material-icons">cloud</i>Api Document
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Nav;
