import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Effect from './Component/Effect'

function App() {
  
  const [number , setNumber] = useState(0)

  let increment = () =>{
    setNumber(number + 1)
  }

  let decrement = () =>{
    setNumber(number - 1)
  }

  return (
    <div>
      {/* <div>
          <h2>first app</h2>

          {number}
          <br />
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
      </div>
      <div> */}
      
      {/* </div> */}
      {/* <Home data={number}/> */}
      <Effect/>
    </div>
  )
}

export default App
