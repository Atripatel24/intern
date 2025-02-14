import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"

const Effect = () => {
    // npm i axios
    const [ number , setNumber] = useState(0)
    const [ data , setdata] = useState()

       let clickbtn = () =>{
        setNumber(number+1)
    }

    let clickbtn1 = async() =>{
      let res = await axios.get("https://6710ca37a85f4164ef2f4dab.mockapi.io/crud")
      setdata(res.data)
      console.log("fun",data)
    }

    // every time
    useEffect(()=>{
     console.log("every render") 
    })
    
    // only first time
    useEffect(()=>{
        console.log("first render")
        console.log("data",data)
    },[])

    // function call  
    useEffect(()=>{
        console.log("function call",data)
    },[clickbtn])

  return (
    <div>
        <h1>useEffect</h1>
        <p>{number}</p>
        <button onClick={clickbtn}>click</button>
        <button onClick={clickbtn1}>dblclick</button>
    </div>
  )
}

export default Effect
