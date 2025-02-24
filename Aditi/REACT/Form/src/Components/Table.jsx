import React, { useEffect, useState } from 'react'
import axios from "axios"

const Table = () => {

  // post - create - ftb data
  // get  - get  btf 
  // put  - update  ftb data
  // delete - delete ftb id

  // npm i axios

  const [users, setUsers] = useState([])
  const [oneuser, setOneusers] = useState([])

  let getdata = async () => {
    let res = await axios.get('https://67b473d5392f4aa94faae9e4.mockapi.io/users')
    console.log(res.data)
    setUsers(res.data)
  }

  let onedata = async(id) =>{
    console.log(id)
    let res = await axios.get(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${id}`)
    setOneusers(res.data)
    console.log(res.data)
  }

  let deleteuser = async (id) =>{
    let res = await axios.delete(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${id}`)
    getdata()
  }

  useEffect(()=>{
    getdata()
  },[])

  return (
    <div>
      <h1>Table</h1>
      {/* <button onClick={getdata}>get data</button> */}
      <table border={1}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>Action</th>
        </tr>
        { users.map((i) => {
          return (
            <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>
                  <button onClick={()=> onedata(i.id)}>View</button> &nbsp;&nbsp;
                  <button onClick={()=> deleteuser(i.id)}>Delete</button>
                </td>
            </tr>
          )
        })
      }
      </table>

    <h1>password : {oneuser.password}</h1>

    </div>
  )
}
export default Table
