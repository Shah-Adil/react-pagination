import React from 'react';
import _ from 'lodash';




export const Pagination = (props) => {

    const { itemCount , PageSize ,currentPage, onPageChange} = props ; 
    const pagesCount = Math.ceil(itemCount / PageSize)  ; 
    if (pagesCount === 1 ) return null
    
    const pages =  _.range(1 , pagesCount + 1 )


  return (
    <div className='pagination'>

        <ul>
          {pages.map(page => <li key={page}><p  className={page === currentPage ? "btn pagination-active " : "btn"} onClick={() => onPageChange(page)}>{page}</p></li>)}
        </ul>
        
    </div>
  )
}



