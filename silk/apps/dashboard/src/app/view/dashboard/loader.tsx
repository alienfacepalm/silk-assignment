import React from 'react'
import './loader.css' // Import the CSS file containing the styles

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
    </div>
  )
}
