import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Login = () => {

  let value = useLocation()
  console.log(value)


  return (
    <div>
        <h1>Login page</h1>
        <p>{value.state}</p>
        <Link to={"/"} >Home</Link> &nbsp;&nbsp;&nbsp;
        <Link to={"/register"}>register</Link>
    </div>
  )
}

export default Login
