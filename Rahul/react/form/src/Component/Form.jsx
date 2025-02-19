import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {

    const [user,setUser] = useState()

    let userHandler = (event) =>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    let submitHandler = (event) =>{
        event.preventDefault()
        console.log(user)

        // post - create
        // get - data get from database
        // put - update
        // delete - delete

        // install module axios

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

        <button>submit</button>

      </form>

      <Link to={'/table'}>Table</Link>
    </div>
  )
}

export default Form
