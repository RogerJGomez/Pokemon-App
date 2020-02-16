import React from 'react'

export default function Pagination({ prevPage, nextPage }) {
    return (
        <div  className="buttons"> 
            {prevPage && <button className="btn" onClick={prevPage}>Previous</button>}
            {nextPage && <button className="btn" onClick={nextPage}>Next</button>}
        </div>
    )
}
