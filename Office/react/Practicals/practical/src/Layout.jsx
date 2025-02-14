import React from 'react'
import Navbar from './Componenets/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
