import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className='navbar'>
        <h2>User</h2>
        <div className="links">
        <p><NavLink to={'/'}>Home</NavLink></p>
        <p><NavLink to={'/register'}>Register</NavLink></p>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
