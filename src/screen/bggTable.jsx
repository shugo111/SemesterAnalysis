import React, { Component } from "react";

import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    { path: "Slno", label: "SL.NO" },
    { path: "USN", label: "USN" },
    { path: "Name", label: "SNAME" },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
