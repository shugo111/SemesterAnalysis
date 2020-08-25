import React, { Component } from "react";
class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        aria-hidden="true"
        onClick={this.props.onClick}
      ></i>
    );
  }
}

export default Like;
