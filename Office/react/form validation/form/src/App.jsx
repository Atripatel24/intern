import { useState } from 'react'
import './App.css'
import Validation from './Validation'

function App() {

  const [name, setname] = useState("")
  const [type, settype] = useState("")
  const [tnc, settnc] = useState(false)
 
  function getdata(e){
    console.log(name,type,tnc)
    e.preventDefault()
  }

  return (
    <>
     <h1>Form Data</h1>

     {/* <form onSubmit={getdata}>

     Name: <input type="text" onChange={(e)=>{setname(e.target.value)}} /><br /><br />

     Movie Type: <select onChange={(e)=>{settype(e.target.value)}}>
        <option >select movie </option>
        <option>Hollywood</option>
        <option>Bollywood</option>
        <option>Tollywood</option>
        <option>Gujarati</option>
      </select>

      <br /><br />

      <input type="checkbox" onChange={(e)=>{settnc(e.target.checked)}} />Accept Term and Condition  

      <br /><br />

      <button type='submit'>Submit</button>

     </form> */}

     <Validation />
    </>
  )
}

export default App
