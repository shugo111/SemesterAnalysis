import React, { Component } from "react";
import Dropdown from "../component/dropdown";
import { Link } from "react-router-dom";
import Nav from "../component/navbar";

class Aggr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropitem1: [
        {
          id: 1,
          value: "CS",
        },
      ],

      dropitem3: [
        {
          id: 1,
          value: "2015",
        },
        {
          id: 1,
          value: "2016",
        },
        {
          id: 1,
          value: "2017",
        },
      ],
      dd1: "CS",
      dd3: "2015",
      data: {},
      isLoaded: false,
    };
  }
  onSelect1 = (item) => {
    this.setState({ dd1: item });
  };
  onSelect3 = (item) => {
    this.setState({ dd3: item });
  };

  render() {
    return (
      <div>
        <Nav />
        <div
          className="card z-depth-5"
          style={{
            maxWidth: 500,
            margin: "100px auto",
            padding: 50,
            paddingBottom: 50,
          }}
        >
          <Dropdown
            items={this.state.dropitem1}
            selected={this.onSelect1}
            title="Department"
          />
          <Dropdown
            items={this.state.dropitem3}
            selected={this.onSelect3}
            title="Scheme"
          />
          <Link
            className="waves-effect waves-light btn"
            to={`/${this.props.page}/${this.state.dd1}/${this.state.dd3}`}
          >
            Submit
          </Link>
        </div>
      </div>
    );
  }
}

export default Aggr;
