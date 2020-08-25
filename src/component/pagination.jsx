import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { length, pagesize, currentpage, onPagechange } = this.props;
    console.log(currentpage);
    const pagecount = Math.ceil(length / pagesize);
    if (pagecount === 1) return null;
    const pages = _.range(1, pagecount + 1);
    return (
      
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentpage ? "active" : "waves-effect"
              }
            >
              <a  onClick={() => onPagechange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      
    );
  }
}
Pagination.propTypes = {
  length: PropTypes.number.isRequired,
  pagesize: PropTypes.number.isRequired,
  currentpage: PropTypes.number.isRequired,
  onPagechange: PropTypes.func.isRequired,
};
export default Pagination;
