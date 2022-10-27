import React from "react";
import { range } from "lodash";
import { Link } from "react-router-dom";
const Paginaton = ({
  totalPersons,
  currentPage,
  perpage,
  handelPageChange,
}) => {
  const pageCount = Math.ceil(totalPersons / perpage);
  if (pageCount === 1) return null;
  const pages = range(1, pageCount + 1);
  return (
    <div className="pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => {
            return (
              <li
                key={page}
                classNameName={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <Link
                  className="page-link"
                  onClick={() => handelPageChange(page)}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Paginaton;
