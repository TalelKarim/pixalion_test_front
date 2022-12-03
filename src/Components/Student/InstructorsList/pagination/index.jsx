import React from 'react'

export default function Pagination(InstructorsPerPage, totalInstructors, paginateInstructors) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalInstructors / InstructorsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  return (
    
         <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginateInstructors(number)} className='page-link'> {number}</button>
    
          </li>
        ))}
      </ul>
    </nav>
  
  )
}
