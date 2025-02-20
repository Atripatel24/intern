import React, { useEffect, useState } from 'react'
import axios from "axios"

const Table = () => {

  // post - create - ftb data
  // get  - get  btf 
  // put  - update  ftb data
  // delete - delete ftb id

  // npm i axios

  const [users, setUsers] = useState([])

  let getdata = async () => {
    let res = await axios.get('https://67b473d5392f4aa94faae9e4.mockapi.io/users')
    console.log(res.data)
    setUsers(res.data)
  }

  useEffect(()=>{
    getdata()
  },[])

  return (
    <div>
      <h1>Table</h1>
      {/* <button onClick={getdata}>get data</button> */}
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
        { users.map((i) => {
          return (
            <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
            </tr>
          )
        })
      }
      </table>
    </div>
  )
}
export default Table
