
import './App.css'
import Navbar from './component/navbar'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, divide, increment, incrementByAmount, multipy } from './Redux/counter/counterslice'
import { fetchtodos } from './Redux/counter/counterslice'

function App() {
  // const count = useSelector((state)=> state.counter.value)
  const data = useSelector((state) => state.counter.data)
  const dispatch = useDispatch();
  // console.log(data)


  return (
    <>
      < Navbar /> 
      {/* <button onClick={()=> dispatch(divide())}>Divide(/)</button>
      <div>
        <button onClick={() => dispatch(decrement(10))}>Decrement(-)</button> &nbsp;
        <span className='count'>{count}</span>&nbsp;&nbsp;
        <button onClick={() => dispatch(increment(10))}>Increment(+)</button>
      </div>
      <button onClick={()=> dispatch(multipy())}>Multipy(*)</button> */}

      <button onClick={() => dispatch(fetchtodos())}>Fetch Data</button>

      {/* { data != null ? 
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user)=>{
            return(
            <tr key={user.id}>  
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
            )
          })}
        </tbody>
      </table> 
      : "" 
    } */}

    </>
  )
}

export default App
