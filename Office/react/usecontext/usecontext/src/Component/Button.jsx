import React,{useContext}  from 'react'
import About from './About'
import { counter } from '../App'

const Button = () => {

    const val = useContext(counter)

  return (
    <>
    <button onClick={() => val.setCount((count) => count + 1)}><span><About/></span></button>
    </>
  )
}

export default Button
