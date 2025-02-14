import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/counter';
import { getdata } from './Slice/apislice';

const Redux = () => {

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    const api = useSelector((state)=> state.api.data)
    console.log(api)

  return (
    <div className='div'>
      <hr />
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <h2>count is {count}</h2>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>

      <br /><br />

      <button onClick={()=>{ dispatch(getdata()) }}>Get API Data</button> 
      
      <hr /><br />

        {api != null ? 
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Password</th>
              <th>Birth Date</th>
            </tr>
          </thead>
          <tbody>
            { api.map((user)=>{
              return(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.birthdate}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
        :""  
      }


    </div>
  )
}

export default Redux
