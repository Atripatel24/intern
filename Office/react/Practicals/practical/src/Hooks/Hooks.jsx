import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Hooks = () => {
  return (
    <div className='body'>
      <h1>Hook Example</h1>

      <nav>
            <ul>
                <li> <Link to='effect' >UseEffect</Link></li>
                <li><Link to='ref' >UseRef</Link></li>
                <li><Link to='context' >UseContext</Link></li>
            </ul>
        </nav>

        <Outlet />
    </div>
  )
}

export default Hooks
