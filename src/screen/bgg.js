import React, { Component } from "react";
import Pagination from "../component/pagination";
import { paginate } from "../component/paginate";
import MoviesTable from "./bggTable";
import Nav from "../component/navbar";
import _ from "lodash";
import { FetchDetained } from "../data/data";

class Bgg extends Component {
  state = {
    movies: [],
    genres: [],
    currentpage: 1,
    selectedGenre: "",
    pageSize: 20,
    sortColumn: { path: "Usn", order: "asc" },
    detainedData: [],
  };

  componentDidMount() {
    let { dept, scheme } = this.props.match.params;
    //this.setState({ movies: getdata(dept, sem, scheme) });
    FetchDetained(scheme, dept).then((result) => {
      this.setState({ movies: result });
    });
  }
  handlePage = (page) => {
    this.setState({ currentpage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const filtered = this.state.movies;
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
    if (this.state.movies.length === 0)
      return <p>There is no data in the database</p>;
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

export default Bgg;
