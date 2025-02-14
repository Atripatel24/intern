import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { counter } from '../App'

const Navbar = () => {

    const contextvalue = useContext(counter)

  const [num , setNum] = useState(0)
  const [componet , setComponet] = useState()

  // change on page
  useEffect(()=>{
    setComponet("Navbar")
    console.log("page reload")
  })



  // one time call

  useEffect(() => {
    console.log("one time change")
  }, []);


  // event happpen

  useEffect(()=>{
      console.log("num is increment ",num)
  },[num])
  
  return (
    <div>
      {/* <h1>Navbar</h1>
      <h3>Number : {num}</h3>
      <button onClick={()=>{setNum(num+1)}}>event</button> */}
      <h1>{componet}</h1>

      <Link to={"home"}> home </Link> <br />
      <Link to={"ref"}> Ref </Link>

      <h3>number : {contextvalue.number} </h3>
      

    </div>
  )
}

export default Navbar
