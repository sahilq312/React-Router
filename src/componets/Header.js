import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
          <Link to="/vans">Vans</Link>

        </nav>
      </header>
  )
}
