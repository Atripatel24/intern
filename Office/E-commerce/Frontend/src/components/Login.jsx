import React from 'react'

const Login = () => {
  return (
    <>
       <div className='container'>
      <h2>Login Form</h2>
      <form action="">

        <label htmlFor="">Email Id :</label>
        <input type="text" placeholder='enter email id' />

        <label htmlFor="">Password :</label>
        <input type="text" placeholder='enter password' />

        <button>Submit</button>

      </form>
     </div>
    </>
  )
}

export default Login
