import React from 'react'
import Plus from './Plus'
import './PlusGrid.css' // Import the CSS file

const PlusGrid = ({top, bottom, left, right}) => {
  return (
    <div style={{
        width:"10vw",
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