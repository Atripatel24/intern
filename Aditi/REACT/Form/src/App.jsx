import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import ReactForm from './Components/ReactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/> */}
      <ReactForm/>
    </>
  )
}

export default App
