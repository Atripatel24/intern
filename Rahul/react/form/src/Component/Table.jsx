import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Table = () => {

    const [user, setUser] = useState([])
    const [onedata , setOnedata] = useState()

    // npm i axios
    // mockapi

    const getdata = async () => {
        let res = await axios.get('https://67b473d5392f4aa94faae9e4.mockapi.io/users')
        console.log(res.data)
        setUser(res.data)
    }

    useEffect(() => {
        getdata()
    }, [])

    let deleteuser = async (id) =>{
      console.log(id)
      let res = await axios.delete(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${id}`)
      getdata()
    }

    const getOnedata = async (id) => {
        let res = await axios.get(`https://67b473d5392f4aa94faae9e4.mockapi.io/users/${id}`)
        console.log(res.data)
        setOnedata(res.data)
    }

    return (
        <div>
            <h1>User data</h1>
            <Link to={'/'}>form</Link>

            {/* <button onClick={getdata}>get data</button> */}
            <br /><br />

            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                {user.map((i) => {
                    return (
                        <tr key={i.id}>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>
                                <button onClick={()=> deleteuser(i.id)}>Delete</button>
                                <button onClick={()=> getOnedata(i.id)}>view</button>
                            </td>
                        </tr>
                    )
                })
                }
            </table>

            { onedata == null ? "" : 
            <div>
                <p>Password : {onedata.password}</p>
            </div>
            }


        </div>
    )
}

export default Table
