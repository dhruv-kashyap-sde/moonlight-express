import React from 'react'

const Plus = ({index}) => {
  return (
    <svg className={`plus-icon plus-icon-${index}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"> <path fillRule="evenodd" clipRule="evenodd" d="M14 0H16V12.1707C16.8524 12.472 17.528 13.1476 17.8293 14H30V16H17.8293C17.528 16.8524 16.8524 17.528 16 17.8293V30H14V17.8293C13.1476 17.528 12.472 16.8524 12.1707 16H0V14H12.1707C12.472 13.1476 13.1476 12.472 14 12.1707V0Z" fill="#fca017"/> </svg>
  )
}

export default Plus