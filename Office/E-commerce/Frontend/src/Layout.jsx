import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
