import React, { Component } from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

class Nav extends Component {
  render() {
    return (
      <>
        <ul id="dropdown1" className="dropdown-content">
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
            <Link to="#" className="brand-logo">
              Result Analysis
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
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
                <img src="logo.png" alt="" style={{ width: "90%" }} />
              </div>
            </div>
          </li>
          <li>
            <Link to="#">
              <i className="material-icons">cloud</i>Semester Ananlysis
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Nav;
