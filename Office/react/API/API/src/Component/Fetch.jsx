import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

        // fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
        //     result.json().then((res) => {
        //         console.log("response", res)
        //         setData(res);
        //     })
        // })
    }

    function filldata(id) {
        setName(data[id - 1].name)
        // console.log(data[id])
        setId(id)
    }

    function deleteuser(id) {
        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        //     method: 'Delete'
        // }).then((res) => {
        //     res.json().then((response) => {
        //         console.log(response)
        //         fetchuser()
        //     })
        // })

        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=> console.log(res))
            .catch((error)=>console.log(error))

    }

    function updateuser(e){
        e.preventDefault();
        console.log(name)

        let data = {name}

        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,data)
            .then((res)=> console.log(res))
            .catch((error)=>console.log(error))

        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        //     method:"PUT" ,
        //     headers:{
        //         'Accept': "application/json",
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        // }).then((result)=>{
        //     result.json().then((res)=>{
        //         console.log(res)
        //     })
        // })
    }

    return (
        <div>
            <h1> Get API & Delete API</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button onClick={() => { deleteuser(item.id) }}>Delete</button></td>
                                <td><button onClick={() => filldata(item.id)}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <form action="">
               <input type="text" value={name} onChange={(e) => { setName(e.target. value) }} />
                <button onClick={updateuser} >Update</button>
            </form>

        </div>
    )
}

export default Fetch
