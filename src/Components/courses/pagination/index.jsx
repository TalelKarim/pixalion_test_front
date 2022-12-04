import React from 'react';
import './style.css';
export default function Pagination({
  itemsPerPage,
  totalItems,
  paginateItems,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav_pagination">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginateItems(number)} className="page-link">
              {' '}
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
