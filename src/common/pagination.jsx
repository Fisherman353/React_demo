import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  //10, 4, 1, func
  const pagesCount = Math.ceil(itemsCount / pageSize); //10 / 4 = 2.5 = 3
  /*   const pages = [pagesCount];
  for(let x = 0 ; x  < pagesCount  ; x++){
      pages[x] = x + 1;
  } */

  //lodash lib ?
  const pages = _.range(1, pagesCount + 1); // 1, 4 - but it prints out 1 - 3
  return (
    <nav>
      <ul className="pagination">
        {pagesCount !== 1
          ? pages.map((page) => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
