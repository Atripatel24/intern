import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editform = () => {

    let param = useParams()
    // console.log(param.id)

    let navigate = useNavigate()

    const [user, setUser] = useState([])

    let getdata = async() =>{
        let res = await axios.get(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${param.id}`)
        setUser(res.data)
    }

    useEffect(()=>{
        getdata()
    },[])

    let userHandler = (e) =>{
        setUser({ ...user, [e.target.name] : e.target.value })
    }

    let submitHandler = async(e) =>{

        e.preventDefault();

        console.log(user)

        let res = await axios.put(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${param.id}`,user)

        if(res){
            navigate("/table")
        }
    }

  return (
    <div>
      <h1>Edit form</h1>

      <form onSubmit={submitHandler}>
        <label>Name :</label>
        <input type="text" name='name' value={user.name} onChange={userHandler}/> <br />

        <label>email :</label>
        <input type="text" name='email' value={user.email} onChange={userHandler} /> <br />

        <label>password :</label>
        <input type="text" name='password' value={user.password} onChange={userHandler} /> <br /><br />

        <button>update</button>

      </form>
    </div>
  )
}

export default Editform
