import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Api = () => {
  return (
    <div>
       <nav>
        <ul>
            <li><Link to='fetch' className='link' >Fetch API</Link></li>
            <li><Link to='post' className='link' >Post API</Link></li>
        </ul>
     </nav>
     <Outlet />
    </div>
  )
}

export default Api
