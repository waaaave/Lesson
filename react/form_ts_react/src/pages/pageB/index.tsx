import * as React from 'react'
import { Link } from 'react-router-dom'

export const PageB = () => {
  return(
    <div>
      <h2>hello PageB</h2>
      <Link to="/">Navigate to Login</Link>
    </div>
  )
}