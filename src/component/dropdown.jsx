import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Dropdown extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { items, selected, title } = this.props;
    return (
      <>
        <div className="col">
          {title != null ? (
            <h6>
              <b>{title}:</b>
            </h6>
          ) : (
            <h6></h6>
          )}
        </div>
        <div className="col s1" style={{ margin: "0 50px 0 0" }}>
          <select onChange={(e) => selected(e.target.value)} id="my-select">
            {items.map((item) => (
              <option key={item.id} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
}

export default Dropdown;
