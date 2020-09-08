import React, { Component } from "react";

import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    { path: "Slno", label: "SL.NO" },
    { path: "USN", label: "USN" },
    { path: "SNAME", label: "SNAME" },
    { path: "sem 1-total", label: "SEM1-TOTAL" },
    { path: "sem 1-per", label: "SEM1-PER" },
    { path: "sem 2-total", label: "SEM2-TOTAL" },
    { path: "sem 2-per", label: "SEM2-PER" },
    { path: "sem 3-total", label: "SEM3-TOTAL" },
    { path: "sem 3-per", label: "SEM3-PER" },
    { path: "sem 4-total", label: "SEM4-TOTAL" },
    { path: "sem 4-per", label: "SEM4-PER" },
    { path: "sem 5-total", label: "SEM5-TOTAL" },
    { path: "sem 5-per", label: "SEM5-PER" },
    { path: "sem 6-total", label: "SEM6-TOTAL" },
    { path: "sem 6-per", label: "SEM6-PER" },
    { path: "sem 7-total", label: "SEM7-TOTAL" },
    { path: "sem 7-per", label: "SEM7-PER" },
    { path: "sem 8-total", label: "SEM8-TOTAL" },
    { path: "sem 8-per", label: "SEM8-PER" },
    { path: "AVG", label: "AVG" },
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
