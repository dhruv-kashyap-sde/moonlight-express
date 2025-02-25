import React from 'react'

const Dot = ({top, bottom, left, right, z}) => {
  return (
    <svg style={{
      position:'absolute',
      top:top,
      bottom:bottom,
      left:left,
      right:right,
      zIndex:z || "-1",
  }} xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none"> <path d="M94 92.5C94 93.3284 93.3284 94 92.5 94C91.6716 94 91 93.3284 91 92.5C91 91.6716 91.6716 91 92.5 91C93.3284 91 94 91.6716 94 92.5Z" fill="#3E3E3E"/> <path d="M81 92.5C81 93.3284 80.3284 94 79.5 94C78.6716 94 78 93.3284 78 92.5C78 91.6716 78.6716 91 79.5 91C80.3284 91 81 91.6716 81 92.5Z" fill="#3E3E3E"/> <path d="M68 92.5C68 93.3284 67.3284 94 66.5 94C65.6716 94 65 93.3284 65 92.5C65 91.6716 65.6716 91 66.5 91C67.3284 91 68 91.6716 68 92.5Z" fill="#3E3E3E"/> <path d="M55 92.5C55 93.3284 54.3284 94 53.5 94C52.6716 94 52 93.3284 52 92.5C52 91.6716 52.6716 91 53.5 91C54.3284 91 55 91.6716 55 92.5Z" fill="#3E3E3E"/> <path d="M42 92.5C42 93.3284 41.3284 94 40.5 94C39.6716 94 39 93.3284 39 92.5C39 91.6716 39.6716 91 40.5 91C41.3284 91 42 91.6716 42 92.5Z" fill="#3E3E3E"/> <path d="M29 92.5C29 93.3284 28.3284 94 27.5 94C26.6716 94 26 93.3284 26 92.5C26 91.6716 26.6716 91 27.5 91C28.3284 91 29 91.6716 29 92.5Z" fill="#3E3E3E"/> <path d="M16 92.5C16 93.3284 15.3284 94 14.5 94C13.6716 94 13 93.3284 13 92.5C13 91.6716 13.6716 91 14.5 91C15.3284 91 16 91.6716 16 92.5Z" fill="#3E3E3E"/> <path d="M3 92.5C3 93.3284 2.32843 94 1.5 94C0.671573 94 0 93.3284 0 92.5C0 91.6716 0.671573 91 1.5 91C2.32843 91 3 91.6716 3 92.5Z" fill="#3E3E3E"/> <path d="M94 79.5C94 80.3284 93.3284 81 92.5 81C91.6716 81 91 80.3284 91 79.5C91 78.6716 91.6716 78 92.5 78C93.3284 78 94 78.6716 94 79.5Z" fill="#3E3E3E"/> <path d="M81 79.5C81 80.3284 80.3284 81 79.5 81C78.6716 81 78 80.3284 78 79.5C78 78.6716 78.6716 78 79.5 78C80.3284 78 81 78.6716 81 79.5Z" fill="#3E3E3E"/> <path d="M68 79.5C68 80.3284 67.3284 81 66.5 81C65.6716 81 65 80.3284 65 79.5C65 78.6716 65.6716 78 66.5 78C67.3284 78 68 78.6716 68 79.5Z" fill="#3E3E3E"/> <path d="M55 79.5C55 80.3284 54.3284 81 53.5 81C52.6716 81 52 80.3284 52 79.5C52 78.6716 52.6716 78 53.5 78C54.3284 78 55 78.6716 55 79.5Z" fill="#3E3E3E"/> <path d="M42 79.5C42 80.3284 41.3284 81 40.5 81C39.6716 81 39 80.3284 39 79.5C39 78.6716 39.6716 78 40.5 78C41.3284 78 42 78.6716 42 79.5Z" fill="#3E3E3E"/> <path d="M29 79.5C29 80.3284 28.3284 81 27.5 81C26.6716 81 26 80.3284 26 79.5C26 78.6716 26.6716 78 27.5 78C28.3284 78 29 78.6716 29 79.5Z" fill="#3E3E3E"/> <path d="M16 79.5C16 80.3284 15.3284 81 14.5 81C13.6716 81 13 80.3284 13 79.5C13 78.6716 13.6716 78 14.5 78C15.3284 78 16 78.6716 16 79.5Z" fill="#3E3E3E"/> <path d="M3 79.5C3 80.3284 2.32843 81 1.5 81C0.671573 81 0 80.3284 0 79.5C0 78.6716 0.671573 78 1.5 78C2.32843 78 3 78.6716 3 79.5Z" fill="#3E3E3E"/> <path d="M94 66.5C94 67.3284 93.3284 68 92.5 68C91.6716 68 91 67.3284 91 66.5C91 65.6716 91.6716 65 92.5 65C93.3284 65 94 65.6716 94 66.5Z" fill="#3E3E3E"/> <path d="M81 66.5C81 67.3284 80.3284 68 79.5 68C78.6716 68 78 67.3284 78 66.5C78 65.6716 78.6716 65 79.5 65C80.3284 65 81 65.6716 81 66.5Z" fill="#3E3E3E"/> <path d="M68 66.5C68 67.3284 67.3284 68 66.5 68C65.6716 68 65 67.3284 65 66.5C65 65.6716 65.6716 65 66.5 65C67.3284 65 68 65.6716 68 66.5Z" fill="#3E3E3E"/> <path d="M55 66.5C55 67.3284 54.3284 68 53.5 68C52.6716 68 52 67.3284 52 66.5C52 65.6716 52.6716 65 53.5 65C54.3284 65 55 65.6716 55 66.5Z" fill="#3E3E3E"/> <path d="M42 66.5C42 67.3284 41.3284 68 40.5 68C39.6716 68 39 67.3284 39 66.5C39 65.6716 39.6716 65 40.5 65C41.3284 65 42 65.6716 42 66.5Z" fill="#3E3E3E"/> <path d="M29 66.5C29 67.3284 28.3284 68 27.5 68C26.6716 68 26 67.3284 26 66.5C26 65.6716 26.6716 65 27.5 65C28.3284 65 29 65.6716 29 66.5Z" fill="#3E3E3E"/> <path d="M16 66.5C16 67.3284 15.3284 68 14.5 68C13.6716 68 13 67.3284 13 66.5C13 65.6716 13.6716 65 14.5 65C15.3284 65 16 65.6716 16 66.5Z" fill="#3E3E3E"/> <path d="M3 66.5C3 67.3284 2.32843 68 1.5 68C0.671573 68 0 67.3284 0 66.5C0 65.6716 0.671573 65 1.5 65C2.32843 65 3 65.6716 3 66.5Z" fill="#3E3E3E"/> <path d="M94 53.5C94 54.3284 93.3284 55 92.5 55C91.6716 55 91 54.3284 91 53.5C91 52.6716 91.6716 52 92.5 52C93.3284 52 94 52.6716 94 53.5Z" fill="#3E3E3E"/> <path d="M81 53.5C81 54.3284 80.3284 55 79.5 55C78.6716 55 78 54.3284 78 53.5C78 52.6716 78.6716 52 79.5 52C80.3284 52 81 52.6716 81 53.5Z" fill="#3E3E3E"/> <path d="M68 53.5C68 54.3284 67.3284 55 66.5 55C65.6716 55 65 54.3284 65 53.5C65 52.6716 65.6716 52 66.5 52C67.3284 52 68 52.6716 68 53.5Z" fill="#3E3E3E"/> <path d="M55 53.5C55 54.3284 54.3284 55 53.5 55C52.6716 55 52 54.3284 52 53.5C52 52.6716 52.6716 52 53.5 52C54.3284 52 55 52.6716 55 53.5Z" fill="#3E3E3E"/> <path d="M42 53.5C42 54.3284 41.3284 55 40.5 55C39.6716 55 39 54.3284 39 53.5C39 52.6716 39.6716 52 40.5 52C41.3284 52 42 52.6716 42 53.5Z" fill="#3E3E3E"/> <path d="M29 53.5C29 54.3284 28.3284 55 27.5 55C26.6716 55 26 54.3284 26 53.5C26 52.6716 26.6716 52 27.5 52C28.3284 52 29 52.6716 29 53.5Z" fill="#3E3E3E"/> <path d="M16 53.5C16 54.3284 15.3284 55 14.5 55C13.6716 55 13 54.3284 13 53.5C13 52.6716 13.6716 52 14.5 52C15.3284 52 16 52.6716 16 53.5Z" fill="#3E3E3E"/> <path d="M3 53.5C3 54.3284 2.32843 55 1.5 55C0.671573 55 0 54.3284 0 53.5C0 52.6716 0.671573 52 1.5 52C2.32843 52 3 52.6716 3 53.5Z" fill="#3E3E3E"/> <path d="M94 40.5C94 41.3284 93.3284 42 92.5 42C91.6716 42 91 41.3284 91 40.5C91 39.6716 91.6716 39 92.5 39C93.3284 39 94 39.6716 94 40.5Z" fill="#3E3E3E"/> <path d="M81 40.5C81 41.3284 80.3284 42 79.5 42C78.6716 42 78 41.3284 78 40.5C78 39.6716 78.6716 39 79.5 39C80.3284 39 81 39.6716 81 40.5Z" fill="#3E3E3E"/> <path d="M68 40.5C68 41.3284 67.3284 42 66.5 42C65.6716 42 65 41.3284 65 40.5C65 39.6716 65.6716 39 66.5 39C67.3284 39 68 39.6716 68 40.5Z" fill="#3E3E3E"/> <path d="M55 40.5C55 41.3284 54.3284 42 53.5 42C52.6716 42 52 41.3284 52 40.5C52 39.6716 52.6716 39 53.5 39C54.3284 39 55 39.6716 55 40.5Z" fill="#3E3E3E"/> <path d="M42 40.5C42 41.3284 41.3284 42 40.5 42C39.6716 42 39 41.3284 39 40.5C39 39.6716 39.6716 39 40.5 39C41.3284 39 42 39.6716 42 40.5Z" fill="#3E3E3E"/> <path d="M29 40.5C29 41.3284 28.3284 42 27.5 42C26.6716 42 26 41.3284 26 40.5C26 39.6716 26.6716 39 27.5 39C28.3284 39 29 39.6716 29 40.5Z" fill="#3E3E3E"/> <path d="M16 40.5C16 41.3284 15.3284 42 14.5 42C13.6716 42 13 41.3284 13 40.5C13 39.6716 13.6716 39 14.5 39C15.3284 39 16 39.6716 16 40.5Z" fill="#3E3E3E"/> <path d="M3 40.5C3 41.3284 2.32843 42 1.5 42C0.671573 42 0 41.3284 0 40.5C0 39.6716 0.671573 39 1.5 39C2.32843 39 3 39.6716 3 40.5Z" fill="#3E3E3E"/> <path d="M94 27.5C94 28.3284 93.3284 29 92.5 29C91.6716 29 91 28.3284 91 27.5C91 26.6716 91.6716 26 92.5 26C93.3284 26 94 26.6716 94 27.5Z" fill="#3E3E3E"/> <path d="M81 27.5C81 28.3284 80.3284 29 79.5 29C78.6716 29 78 28.3284 78 27.5C78 26.6716 78.6716 26 79.5 26C80.3284 26 81 26.6716 81 27.5Z" fill="#3E3E3E"/> <path d="M68 27.5C68 28.3284 67.3284 29 66.5 29C65.6716 29 65 28.3284 65 27.5C65 26.6716 65.6716 26 66.5 26C67.3284 26 68 26.6716 68 27.5Z" fill="#3E3E3E"/> <path d="M55 27.5C55 28.3284 54.3284 29 53.5 29C52.6716 29 52 28.3284 52 27.5C52 26.6716 52.6716 26 53.5 26C54.3284 26 55 26.6716 55 27.5Z" fill="#3E3E3E"/> <path d="M42 27.5C42 28.3284 41.3284 29 40.5 29C39.6716 29 39 28.3284 39 27.5C39 26.6716 39.6716 26 40.5 26C41.3284 26 42 26.6716 42 27.5Z" fill="#3E3E3E"/> <path d="M29 27.5C29 28.3284 28.3284 29 27.5 29C26.6716 29 26 28.3284 26 27.5C26 26.6716 26.6716 26 27.5 26C28.3284 26 29 26.6716 29 27.5Z" fill="#3E3E3E"/> <path d="M16 27.5C16 28.3284 15.3284 29 14.5 29C13.6716 29 13 28.3284 13 27.5C13 26.6716 13.6716 26 14.5 26C15.3284 26 16 26.6716 16 27.5Z" fill="#3E3E3E"/> <path d="M3 27.5C3 28.3284 2.32843 29 1.5 29C0.671573 29 0 28.3284 0 27.5C0 26.6716 0.671573 26 1.5 26C2.32843 26 3 26.6716 3 27.5Z" fill="#3E3E3E"/> <path d="M94 14.5C94 15.3284 93.3284 16 92.5 16C91.6716 16 91 15.3284 91 14.5C91 13.6716 91.6716 13 92.5 13C93.3284 13 94 13.6716 94 14.5Z" fill="#3E3E3E"/> <path d="M81 14.5C81 15.3284 80.3284 16 79.5 16C78.6716 16 78 15.3284 78 14.5C78 13.6716 78.6716 13 79.5 13C80.3284 13 81 13.6716 81 14.5Z" fill="#3E3E3E"/> <path d="M68 14.5C68 15.3284 67.3284 16 66.5 16C65.6716 16 65 15.3284 65 14.5C65 13.6716 65.6716 13 66.5 13C67.3284 13 68 13.6716 68 14.5Z" fill="#3E3E3E"/> <path d="M55 14.5C55 15.3284 54.3284 16 53.5 16C52.6716 16 52 15.3284 52 14.5C52 13.6716 52.6716 13 53.5 13C54.3284 13 55 13.6716 55 14.5Z" fill="#3E3E3E"/> <path d="M42 14.5C42 15.3284 41.3284 16 40.5 16C39.6716 16 39 15.3284 39 14.5C39 13.6716 39.6716 13 40.5 13C41.3284 13 42 13.6716 42 14.5Z" fill="#3E3E3E"/> <path d="M29 14.5C29 15.3284 28.3284 16 27.5 16C26.6716 16 26 15.3284 26 14.5C26 13.6716 26.6716 13 27.5 13C28.3284 13 29 13.6716 29 14.5Z" fill="#3E3E3E"/> <path d="M16 14.5C16 15.3284 15.3284 16 14.5 16C13.6716 16 13 15.3284 13 14.5C13 13.6716 13.6716 13 14.5 13C15.3284 13 16 13.6716 16 14.5Z" fill="#3E3E3E"/> <path d="M3 14.5C3 15.3284 2.32843 16 1.5 16C0.671573 16 0 15.3284 0 14.5C0 13.6716 0.671573 13 1.5 13C2.32843 13 3 13.6716 3 14.5Z" fill="#3E3E3E"/> <path d="M94 1.5C94 2.32843 93.3284 3 92.5 3C91.6716 3 91 2.32843 91 1.5C91 0.671573 91.6716 0 92.5 0C93.3284 0 94 0.671573 94 1.5Z" fill="#3E3E3E"/> <path d="M81 1.5C81 2.32843 80.3284 3 79.5 3C78.6716 3 78 2.32843 78 1.5C78 0.671573 78.6716 0 79.5 0C80.3284 0 81 0.671573 81 1.5Z" fill="#3E3E3E"/> <path d="M68 1.5C68 2.32843 67.3284 3 66.5 3C65.6716 3 65 2.32843 65 1.5C65 0.671573 65.6716 0 66.5 0C67.3284 0 68 0.671573 68 1.5Z" fill="#3E3E3E"/> <path d="M55 1.5C55 2.32843 54.3284 3 53.5 3C52.6716 3 52 2.32843 52 1.5C52 0.671573 52.6716 0 53.5 0C54.3284 0 55 0.671573 55 1.5Z" fill="#3E3E3E"/> <path d="M42 1.5C42 2.32843 41.3284 3 40.5 3C39.6716 3 39 2.32843 39 1.5C39 0.671573 39.6716 0 40.5 0C41.3284 0 42 0.671573 42 1.5Z" fill="#3E3E3E"/> <path d="M29 1.5C29 2.32843 28.3284 3 27.5 3C26.6716 3 26 2.32843 26 1.5C26 0.671573 26.6716 0 27.5 0C28.3284 0 29 0.671573 29 1.5Z" fill="#3E3E3E"/> <path d="M16 1.5C16 2.32843 15.3284 3 14.5 3C13.6716 3 13 2.32843 13 1.5C13 0.671573 13.6716 0 14.5 0C15.3284 0 16 0.671573 16 1.5Z" fill="#3E3E3E"/> <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#3E3E3E"/> </svg>
  )
}

export default Dot;