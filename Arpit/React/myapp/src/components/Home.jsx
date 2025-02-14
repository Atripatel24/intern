import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { counter } from '../App'

const Home = () => {
    // console.log(prop.asd)

    const val = useContext(counter)

    let user = [
      {id: 1 , name: "tony"},
      {id:2 , name:"ironman"},
      {id:3 , name:"hulk"}
    ]

  return (
    <div>
      <h1>Home component</h1>
      {/* <h3>prop number : {prop.asd.number}</h3>
      <h3>prop name : {prop.asd.name} </h3> */}

        {user.map((item)=>{
          
          return(
            <Link to={`/name/${item.name}`} state={user} style={{display:"block"}}>{item.name}</Link>
          )
        
        })}

        <h3>home number : {val.number}</h3>
      <button onClick={()=>{val.setNumber(val.number + 1)}}>increment</button>


    </div>
  )
}

export default Home
