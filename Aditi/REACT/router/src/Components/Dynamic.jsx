import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
  
  let param = useParams()
  console.log(param)

  return (
    <div>
      <h1>I am {param.name} . I study in computer eng.</h1>
    </div>
  )
}

export default Dynamic
