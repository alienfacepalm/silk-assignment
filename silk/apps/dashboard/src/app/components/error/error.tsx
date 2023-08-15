import React from 'react'
import './error.css'

export const ErrorMessage: React.FC<{ error: Error }> = ({ error }) => (
  <div className="flex justify-center items-center h-screen error">
    {error.toString()}
  </div>
)
