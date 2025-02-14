import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    let data = "homedata"

    let user = [
      { name : "peter"},
      { name : "sam"},
      { name : "tom"},
      { name : "devloper"}
    ]
    

  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/register"}>Register</Link>&nbsp;&nbsp;&nbsp;
      <Link to={"/login"} state={data} >Login</Link>&nbsp;&nbsp;&nbsp;
     
      { user.map((i)=>{
        return(
          <div>
          <Link to={`/dynamic/${i.name}`} >{i.name}</Link> <br />
          </div>
        )
      })}


    </div>
  )
}

export default Home
