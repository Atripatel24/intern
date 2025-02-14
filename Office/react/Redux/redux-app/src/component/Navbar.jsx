import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state)=> state.counter.value)
  return (
    <div>
     <h1> counter value is {count}</h1>
    </div>
  )
}

export default Navbar
