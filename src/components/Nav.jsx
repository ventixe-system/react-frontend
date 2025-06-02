import React from 'react'
import { NavLink } from 'react-router-dom'
import ventixeLogo from '../assets/images/ventixe-logo.png'
import TicketIcon from './icons/TicketIcon'



const Nav = () => {
  return (
    <nav className="flex flex-col items-start justify-start p-8 mr-2 bg-coolgrey-10 rounded-2xl">
      <div className="flex items-center justify-center mb-4">
        <img src={ventixeLogo} alt="Ventixe Logo" className="w-6 h-6" />
        <span className="ml-2 text-2xl font-medium text-secondary-110">Ventixe</span>
      </div>
      <ul className="font-normal space-y-4">
        <li>
          <NavLink to="/EventPage"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                  isActive ? "text-primary-100 font-semibold" : "text-secondary-100 font-medium hover:text-primary-100"
              }`}>
            <TicketIcon className="w-6 h-6 text-inherit" />
            <span>Events</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav