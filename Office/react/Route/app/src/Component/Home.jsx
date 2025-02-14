import React from 'react'
import { Link, Outlet, Router } from 'react-router-dom'

const Home = () => {

  let users = [
    { id:1 , name:"Atri" , email:"atri@gmail.com" },
    { id:2 , name:"Dinesh" , email:"dinesh@gmail.com" },
    { id:3 , name:"Kaushik" , email:"kaushik@gmail.com" },
    { id:4 , name:"Rajveer" , email:"rajveer@gmail.com" }
  ]
  return (
    <>
    <h1>Home Component</h1>

    { users.map((item)=>{
      console.log(item)
      return(
      <div key={item.name}>
       <Link to={`user/${item.id}`} state={item} >{item.name}</Link>
      </div> )
    }
    )}
   <Outlet val={users} />
    </>
  )
}

export default Home
