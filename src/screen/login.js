import React, { Component } from "react";

class Login extends Component {
  render() {
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
            src="logo.png"
            style={{ width: "40%", margin: "0 0 0 30%" }}
          ></img>
          <h4 className="center-align">LOGIN</h4>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"></input>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                ></input>
                <label for="password">Password</label>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: 30 }}>
              <div className="col s12 center-align">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Login
                  <i className="material-icons right">send</i>
                </button>
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
