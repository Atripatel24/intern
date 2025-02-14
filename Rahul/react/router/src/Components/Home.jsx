import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  let data = "homedata"

  return (
    <div>
      <h1>Home page</h1>
      <Link to={"/register"} >Register</Link> &nbsp;&nbsp;&nbsp;
      <Link to={"/login"} state={data}>Login</Link>
    </div>
  )
}

export default Home
