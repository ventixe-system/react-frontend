import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/EventPage">Events</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav