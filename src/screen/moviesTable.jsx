import React, { Component } from "react";


import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Name" },
    { path: "genre.name", label: "USN" },
    { path: "numberInStock", label: "Aggregate" },
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
