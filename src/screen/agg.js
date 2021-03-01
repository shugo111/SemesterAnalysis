import React, { Component } from "react";
import { getdata } from "../services/academicperformance2015";
import Pagination from "../component/pagination";
import { paginate } from "../component/paginate";
import MoviesTable from "./aggTable";
import Nav from "../component/navbar";
import _ from "lodash";
import { FetchSummary, FetchAggregate } from "../data/data";

class Agg extends Component {
  state = {
    movies: [],
    genres: [],
    data: [],
    currentpage: 1,
    selectedGenre: "",
    pageSize: 20,
    sortColumn: { path: "Usn", order: "asc" },
    mean: null,
  };

  componentDidMount() {
    let { dept, scheme } = this.props.match.params;
    FetchSummary(scheme, dept).then((result) => {
      this.setState({ data: result });
    });
    FetchAggregate(scheme, dept).then((result) => {
      this.setState({ mean: result.Mean });
    });
    this.setState({
      movies: getdata(dept, scheme),
    });
  }
  handlePage = (page) => {
    this.setState({ currentpage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const filtered = this.state.data;
    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    const movies = paginate(
      sorted,
      this.state.currentpage,
      this.state.pageSize
    );
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    if (this.state.data.length === 0)
      return <p>There is no Students in the database</p>;
    const { totalCount, data: movies } = this.getPageData();
    return (
      <div>
        <Nav />
        <div className="row" style={{ margin: 50 }}>
          <div className="col-9">
            <p style={{ maxWidth: "1300px", padding: 10, margin: "auto" }}>
              Showing {totalCount} students in database
            </p>
            <div
              className="card z-depth-5"
              style={{ maxWidth: "1300px", padding: 10, margin: "auto" }}
            >
              <MoviesTable
                movies={movies}
                sortColumn={this.state.sortColumn}
                onSort={this.handleSort}
                mean={this.state.mean}
              />
              <Pagination
                length={totalCount}
                pagesize={this.state.pageSize}
                onPagechange={this.handlePage}
                currentpage={this.state.currentpage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Agg;
