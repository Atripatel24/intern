import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      {/* <div>
        <div style={{width:"30%"}}> <Navbar /> </div>
        <div style={{width:"70%",float:"right"}}> <Outlet /></div>
      </div> */}

      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
