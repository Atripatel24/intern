import React from 'react'
import { useParams , useLocation } from 'react-router-dom'

const Dynamic_route = () => {
    const param = useParams()
    // console.log(param.name)

  // get all related data from id
  const data = useLocation();
  const user = data.state; 


  return (
    <div>

      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Dynamic_route
