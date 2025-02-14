import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <>
     <nav className='navbar'>
        <h2>E-Commerce App</h2>
        <div>
            <NavLink className='link' to={'/'}>Home</NavLink>
            <NavLink className="link" to={'/register'}>Register</NavLink>
            <NavLink className="link" to={'/login'}>Login</NavLink>
        </div>

    </nav> 
    </>
  )
}

export default Navbar
