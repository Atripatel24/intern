import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Form = () => {

    // push(url , data) == send data ,
    //  get(url) == get data ,
    //  put(url , data) == update data, 
    // patch(url , data) == update data, 
    // delete(url) == delete data

    const[user , setUser] = useState()

    let getdata = async() =>{
      let res =  await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res.data)
      setUser(res.data)
    }

    // useEffect(() => {
    //     getdata()
    // }, []);

  return (
    <div>
        <button onClick={getdata}>get data </button>

       { user == undefined ? <h1>No data</h1>:user.map((item)=>{
        return(
            <div key={item.id}>
            <h1>{item.name}</h1>
            <h3>{item.email}</h3>
            </div>
        )
       })}

    </div>
  )
}

export default Form
