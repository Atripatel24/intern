import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from "./componets/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home value={count}/>
     <h3>count value : {count}</h3>
     <button onClick={()=>{setCount(count + 1)}}>Increment</button>
    </>
  )
}

export default App
