import React , {useState} from 'react'
import axios from 'axios';

const Post = () => {
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
 
  function onsubmit(){
      // console.log({name,email});
      let data = {name,email}

          axios.post("https://jsonplaceholder.typicode.com/users",data)
              .then((res)=>{
                  console.log(res);
              })
              .catch((error)=>{console.log(error)})
  }

  return (
    <div className='div'>
      <h1>Post API</h1>
   <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="name" /> <br /><br />
   <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"  placeholder='email'/> <br /><br />
   <button onClick={onsubmit}>Save Data</button>
    </div>
  )
}

export default Post
