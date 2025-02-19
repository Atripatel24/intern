import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Table = () => {

    const [user, setUser] = useState()

    // npm i axios
    // mockapi

    const getdata = async () => {
        let res = await axios.get('https://67b473d5392f4aa94faae9e4.mockapi.io/users')
        console.log(res.data)
        setUser(res.data)
    }

    useEffect(()=>{
        getdata()
    },[])

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
                </tr>

                {user == null ?
                 <tr>
                    <td>no data</td>
                </tr> :
                    user.map((i) => {
                        return (
                            <tr key={i.id}>
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
