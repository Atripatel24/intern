import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const userHandler = (event) =>{
        setUser({ ...user , [event.target.name] : event.target.value})
        // console.log(user)
    }

    const submitHandler = async (event) =>{
        event.preventDefault()
        console.log(user)

        let res = await axios.post('https://67b473d5392f4aa94faae9e4.mockapi.io/users',user)

        if(res){
          navigate('/table')
        }

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
