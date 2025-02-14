import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const user = useLocation();
    const data = user.state
    console.log(data)

    const [name,setName] = useState(data.name);
    const [id,setId] = useState(data.id)

    function updateuser(e) {
        e.preventDefault();
        console.log('new',name)

        let data = {name}

        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,data)
            .then((res)=> console.log(res))
            .catch((error)=>console.log(error))
    }

  return (
    <div className='div'>

        <h2>Update Form</h2>

        <form action="">
            <input type="text" value={name} onChange={(e) => { setName(e.target. value) }} />
            <button onClick={updateuser} >Update</button>
        </form>
    </div>
  )
}

export default Update
