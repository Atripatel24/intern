import React, { useState } from 'react'

const Form = () => {
    
    const [user, setUser] = useState()

    const userHandler = (event) =>{
        setUser({ ...user , [event.target.name] : event.target.value})
        // console.log(user)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        console.log(user)
    }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Detail Form</h1>

        <label>Name : </label>
        <input type="text" name='name' onChange={userHandler}/> <br />

        <label>Email : </label>
        <input type="text" name='email' onChange={userHandler}/> <br />

        <label>Password : </label>
        <input type="text" name='password' onChange={userHandler} /> <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
