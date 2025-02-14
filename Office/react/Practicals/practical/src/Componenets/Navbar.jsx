import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li> <Link to='/' >Home</Link></li>
                <li> <Link to='/about' >About</Link></li>
                <li><Link to='/hook' >Hooks</Link></li>
                <li><Link to='/form' >Form</Link></li>
                <li><Link to='/api' >API</Link></li>
                <li><Link to='/redux' >Redux</Link></li>
            </ul>
        </nav>
       
    </div>
  )
}

export default Navbar
