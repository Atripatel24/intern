import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <h1>Register page</h1>
      <Link to={"/"} >Home</Link> &nbsp;&nbsp;&nbsp;
      <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Register
