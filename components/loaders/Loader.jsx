import React from 'react'
import './Loader.css'

const Loader = ({ fullScreen = true }) => {
  return (
    <div className={`flex justify-center items-center ${fullScreen ? 'h-screen' : 'h-fit'}`}>
        <div className="loader"></div>
    </div>
  )
}

export default Loader