import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Fetch = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [id, setId] = useState("")


    useEffect(() => {
        fetchuser();
    }, [])

    function fetchuser() {

            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res)=> {
                    console.log(res)
                    setData(res.data)
                } )
                .catch((error)=> { console.log(error)})
    }


    function deleteuser(id) {

        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=> console.log(res))
            .catch((error)=>console.log(error))

    }


  return (
    <div>
          <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button onClick={() => { deleteuser(item.id) }}>Delete</button></td>
                                <td><button>
                                    <Link to={`/api/update/${item.id}`} className='Link' state={item}>Edit</Link>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

    </div>
  )
}

export default Fetch
