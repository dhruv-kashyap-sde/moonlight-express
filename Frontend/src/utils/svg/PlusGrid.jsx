import React from 'react'
import Plus from './Plus'
import './PlusGrid.css' // Import the CSS file

const PlusGrid = ({top, bottom, left, right, w}) => {
  return (
    <div style={{
        width: w || "10vw",
        top:top,
        bottom:bottom,
        left:left,
        right:right
    }} className='plus-grid'>
        {[...Array(9)].map((_, index) => (
          <Plus key={index} index={index}/>
        ))}
    </div>
  )
}

export default PlusGrid