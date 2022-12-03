import React from 'react'

export default function Pagination(studentsPerPage, totalStudents, paginateStudents) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  return (
    
         <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginateStudents(number)} className='page-link'> {number}</button>
    
          </li>
        ))}
      </ul>
    </nav>
  
  )
}
