import React, { Component } from "react";
import Dropdown from "../component/dropdown";
import { Link } from "react-router-dom";
import Nav from "../component/navbar";

class Bggr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropitem1: [
        {
          id: 1,
          value: "CS",
        },
        {
          id: 2,
          value: "IS",
        },
        {
          id: 3,
          value: "ECE",
        },
        {
          id: 4,
          value: "EEE",
        },
        {
          id: 5,
          value: "ME",
        },
        {
          id: 6,
          value: "Civil",
        },
      ],
      dropitem2: [
        {
          id: 1,
          value: "1",
        },
        {
          id: 2,
          value: "2",
        },
        {
          id: 3,
          value: "3",
        },
        {
          id: 4,
          value: "4",
        },
        {
          id: 5,
          value: "5",
        },
        {
          id: 6,
          value: "6",
        },
        {
          id: 7,
          value: "7",
        },
        {
          id: 8,
          value: "8",
        },
      ],
      dropitem3: [
        {
          id: 1,
          value: "19",
        },
        {
          id: 2,
          value: "20",
        },
        {
          id: 3,
          value: "21",
        },
      ],
      dd1: "CS",
      dd2: "5",
      dd3: "19",
      data: {},
      isLoaded: false,
    };
  }
  onSelect1 = (item) => {
    this.setState({ dd1: item });
  };
  onSelect2 = (item) => {
    this.setState({ dd2: item });
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
            items={this.state.dropitem2}
            selected={this.onSelect2}
            title="Semester"
          />
          <Dropdown
            items={this.state.dropitem3}
            selected={this.onSelect3}
            title="Scheme"
          />
          <Link
            className="waves-effect waves-light btn"
            to={`/${this.props.page}/${this.state.dd1}/${this.state.dd2}/${this.state.dd3}`}
          >
            Submit
          </Link>
        </div>
      </div>
    );
  }
}

export default Bggr;
