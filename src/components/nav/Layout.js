import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

export const Layout = () => {
  return (

    <div>
      <nav>
        <h1 className='logo'>G</h1>
        <div className='navicons'>
          <NavLink to="/about" className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: 'teal' }}>About</NavLink>

          <NavLink to="/experience" className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: 'teal' }}>Experiance</NavLink>

          <NavLink to="/projects" className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: 'teal' }}>Projects</NavLink>
          <NavLink to="/skills" className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: 'teal' }}>Skills</NavLink>
          <NavLink to="/contact" className="Nav_link"
            activeClassName="activeRoute"
            activeStyle={{ color: 'teal' }}>Contact</NavLink>

        </div>
        <Outlet />
      </nav>
    </div>
  )
}
