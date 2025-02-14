import React from 'react'
import { useContext } from 'react'
import { counter } from '../App'
import About from '../Componenets/About'


const UseContext = () => {
    const val = useContext(counter)
    console.log("val",val)

    return (
      <div className='div'>
      <button onClick={() => val.setCount((count) => count + 1)}><span><About/></span></button>
      </div>
    )
}

export default UseContext
