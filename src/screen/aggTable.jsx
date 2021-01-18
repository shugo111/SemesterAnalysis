import React, { Component } from "react";

import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    // { path: "Slno", label: "SL.NO" },
    { path: "Usn", label: "USN" },
    // { path: "SNAME", label: "SNAME" },
    { path: "ScoreSum[1]", label: "SEM1-TOTAL" },
    // { path: "sem 1-per", label: "SEM1-PER" },
    { path: "ScoreSum[2]", label: "SEM2-TOTAL" },
    // { path: "sem 2-per", label: "SEM2-PER" },
    { path: "ScoreSum[3]", label: "SEM3-TOTAL" },
    // { path: "sem 3-per", label: "SEM3-PER" },
    { path: "ScoreSum[4]", label: "SEM4-TOTAL" },
    // { path: "sem 4-per", label: "SEM4-PER" },
    { path: "ScoreSum[5]", label: "SEM5-TOTAL" },
    // { path: "sem 5-per", label: "SEM5-PER" },
    { path: "ScoreSum[6]", label: "SEM6-TOTAL" },
    // { path: "sem 6-per", label: "SEM6-PER" },
    { path: "ScoreSum[7]", label: "SEM7-TOTAL" },
    // { path: "sem 7-per", label: "SEM7-PER" },
    { path: "ScoreSum[8]", label: "SEM8-TOTAL" },
    // { path: "sem 8-per", label: "SEM8-PER" },
    { path: "Average", label: "AVG" },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    console.log(movies)
    return (
      <>
      <p><b>Mean: </b>{this.props.mean}</p>
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
      </>
    );
  }
}

export default MoviesTable;
