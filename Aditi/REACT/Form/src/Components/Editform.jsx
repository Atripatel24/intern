import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'

const Editform = () => {

    const [user, setUser] = useState({})
    let navigate = useNavigate()

    let param = useParams()
    // console.log(param)

    let getdata = async () => {
        let res = await axios.get(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${param.id}`)
        setUser(res.data)
    }

    let userHandler = (e) =>{
        setUser({ ...user, [e.target.name]:e.target.value})
    }

    useEffect(() => {

        getdata()

    }, [])

    let submitHandler = async (e) =>{
        e.preventDefault();

        let res = await axios.put(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${param.id}`,user)

        if(res){
            navigate('/table')
        }

    }

    return (
        <div>
            <h1>Edit Form</h1>

            <form onSubmit={submitHandler}>
                <label>Name : </label>
                <input type="text" name='name' value={user.name} onChange={userHandler} /> <br />

                <label>Email : </label>
                <input type="text" name='email' value={user.email} onChange={userHandler}/> <br />

                <label>Password : </label>
                <input type="text" name='password' value={user.password} onChange={userHandler} /> <br /><br />

                <button>update</button>
            </form>

        </div>
    )
}

export default Editform
