import axios from 'axios';
import React, { useState } from 'react'

const Post = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
   
    function onsubmit(){
        // console.log({name,email});
        let data = {name,email}
        // fetch("https://jsonplaceholder.typicode.com/users",{
        //     method:"POST" ,
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

            axios.post("https://jsonplaceholder.typicode.com/users",data)
                .then((res)=>{
                    console.log(res);
                })
                .catch((error)=>{console.log(error)})


    }
  return (
   <>
   <h1>Post API</h1>
   <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="name" /> <br />
   <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"  placeholder='email'/> <br />
   <button onClick={onsubmit}>Save Data</button>
   </>
  )
}

export default Post
