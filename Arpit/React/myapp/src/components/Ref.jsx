import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {

    const [ num ,setNum ] = useState(0)

    let a = useRef()


    useEffect(()=>{
        // a.current = a.current + 1
        // a.current.style.color = "white",
        a.current.style.backgroundColor = "blue"
        a.current.style.width = "100px"
        // console.log("value of a is :" ,a.current)
    })

  return (
    <div>
      <h1>useRef example</h1>
      <h3>count:{num}</h3>
      <button ref={a} onClick={()=>{setNum(num+1)}}>Click</button>
    </div>
  )
}

export default Ref
