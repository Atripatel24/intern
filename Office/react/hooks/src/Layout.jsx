import React from 'react'
import Navbar from './component/Router'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>

            <Navbar /> <br />
            <Outlet />
        </>
    )
}

export default Layout
