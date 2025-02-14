import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { counter } from '../App'
import { Link } from 'react-router-dom'

const Name = () => {

  const conval = useContext(counter)

    let data = useLocation()
    console.log(data)
    
    let name = data.state
    console.log(name)

    let param = useParams()
    console.log(param)




  return (
    <div>
      <h1>hero {param.id}</h1>
      <h3>conval : {conval.number}</h3>
      <button onClick={()=>{conval.setNumber(conval.number + 1)}}>increment</button>

      <Link to={'/'}>navbar</Link>
    </div>
  )
}

export default Name
