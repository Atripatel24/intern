import React, { useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Form = () => {
    
    const [user, setUser] = useState({name:"", email:"" , password:""})
    const navigate = useNavigate()

    let param = useParams()
  
    const userHandler = (event) =>{
        setUser({ ...user , [event.target.name] : event.target.value})
        // console.log(user)
    }

    let getdata = async () => {
      let res = await axios.get(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${param.id}`)
      setUser(res.data)
  }

  useEffect(() => {
        if(param.id){
          getdata()
        }
      }, [])

    const submitHandler = async (event) =>{
        event.preventDefault()
        console.log(user)

        if(param.id){
          let res = await axios.put(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${param.id}`,user)
        }else{
          let res = await axios.post('https://67b473d5392f4aa94faae9e4.mockapi.io/users',user)
        }

        if(res){
          navigate('/table')
        }

    }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Detail Form</h1>

        <label>Name : </label>
        <input type="text" name='name' value={user.name} onChange={userHandler}/> <br />

        <label>Email : </label>
        <input type="text" name='email' onChange={userHandler}/> <br />

        <label>Password : </label>
        <input type="text" name='password' onChange={userHandler} /> <br />

        { param.id ? <button>Update</button> :<button>Submit</button> } 
      </form>
    </div>
  )
}

export default Form
