import React,{ useState } from 'react'
import './App.css'
import User from './Component/User'
import State from './Component/State'
import Condition from './Component/Ifelse'
import Props from './Component/Props'
import Input from './Component/Input'

import Effect from './Component/UseEffect'
import UseRef from './Component/UseRef'

function App() {
  const [count, setCount] = useState(null)
  const [print, setprint] = useState(false)
  const [status, setstatus] = React.useState(false)



  function event(){
    setstatus(!status)
  }

  // function call by props

  function data(){
    alert("App Component");
  }

  return (
    <>

    
     {/* { status? <h1>toggle practice </h1>:null}
      <button onClick={()=>setstatus(!status)}>toggle</button> */}

      {/* <State/> */}

      {/* <Props name="Props Example"/> */}
      {/* <Props data={data} /> */}

      {/* <Condition/> */}

      {/* <Input /> */}

      {/* < Effect /> */}

      <UseRef/>
    
    </>
  )
}

export default App
