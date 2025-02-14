import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/slice'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  const data = useSelector((state)=> state.count.value)
  console.log(data)

  const dispatch = useDispatch()

  return (
    <>
     <h1>App component</h1>
     <h1>{data}</h1>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>decrement</button>

     <About/>

  
    </>
  )
}

export default App
