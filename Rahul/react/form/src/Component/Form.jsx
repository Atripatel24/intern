import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Form = () => {

    const [user,setUser] = useState()
    let navigate = useNavigate()

    let userHandler = (event) =>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    let submitHandler = async (event) =>{
        event.preventDefault()
        console.log(user)

        // post - create
        // get - data get from database
        // put - update
        // delete - delete

        // install module axios

        let res = await axios.post('https://67b473d5392f4aa94faae9e4.mockapi.io/users',user)

        if(res){
          navigate('/table')
        }
      

    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>detail form</h1>

        <label>Name :</label>
        <input type="text" name='name'  onChange={userHandler}/> <br />

        <label>email :</label>
        <input type="text" name='email'onChange={userHandler}/> <br />

        <label>password :</label>
        <input type="text" name='password' onChange={userHandler}/> <br /><br />

        <button className='btn'>submit</button>

      </form>

      <Link to={'/table'}>Table</Link>
    </div>
  )
}

export default Form
