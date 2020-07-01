import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div
        className="card z-depth-5"
        style={{
          maxWidth: 900,
          margin: "50px auto",
          padding: 30,
        }}
      >
        <div className="row" style={{ margin: "auto" }}>
          <h4 className="center-align">REGISTRATION</h4>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate"></input>
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate"></input>
                <label for="last_name">Last Name</label>
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
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"></input>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  style={{ margin: "auto" }}
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
