import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    
    const [number , setNumber] = useState(0)
    let x = useRef(0)
    let a = useRef()

    let increment = () =>{
        setNumber(number+1)
    }

    useEffect(()=>{
        x.current+=1
        console.log("x value :",x.current)
        a.current.style.color = "red"
    })

  return (
    <div>
        
        <p>{number}</p>

      <button onClick={increment}>click</button>

        <button ref={a}>ref button</button>
    </div>
  )
}

export default Ref
