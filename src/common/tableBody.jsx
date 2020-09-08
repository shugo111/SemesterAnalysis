import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.Slno}>
            {columns.map((column) => (
              <td key={item.Slno + (column.path || column.key)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
