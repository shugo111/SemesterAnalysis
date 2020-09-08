import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: null,
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleLogin = () => {
    if (
      this.state.email === "abc@cmrit.ac.in" &&
      this.state.password === "1234"
    ) {
      this.setState({ redirect: "/home" });
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div
        className="card z-depth-5"
        style={{
          maxWidth: 500,
          margin: "50px auto",
          padding: 10,
          paddingBottom: 0,
        }}
      >
        <div className="row">
          <img
            alt="logo"
            src={require("../images/logo.png")}
            style={{ width: "40%", margin: "0 0 0 30%" }}
          ></img>
          <h4 className="center-align">LOGIN</h4>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                ></input>
                <label >Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                ></input>
                <label >Password</label>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: 30 }}>
              <div className="col s6 center-align">
                <button
                  onClick={this.handleLogin}
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Login
                  <i className="material-icons right">send</i>
                </button>
              </div>
              <div className="col s6 center-align">
                <a
                  href="/register"
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Register
                  <i className="material-icons right">send</i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <i>Department of CSE</i>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
