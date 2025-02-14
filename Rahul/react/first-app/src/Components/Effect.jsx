import React, { useEffect, useRef, useState } from 'react'

const Effect = () => {

    const [number,setnumber] = useState(0)

    let btnclick = () =>{
        setnumber(number+1)
    }

    // every time 
    useEffect(()=>{
        console.log("every render")
    })

    // first render
    useEffect(()=>{
        console.log("first render")
    },[])

    //function call
    useEffect(()=>{
        console.log("function call render")
    },[btnclick])



  return (
    <div>
        <h1>useEffect</h1> 
        <p>{number}</p>
        <button onClick={btnclick}>click</button>   
        
    </div>
  )
}

export default Effect
