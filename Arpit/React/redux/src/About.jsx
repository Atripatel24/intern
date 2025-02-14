import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementAmount } from './Redux/slice'

const About = () => {
    const value = useSelector((state)=>state.count.value)
    const dispatch = useDispatch()



    let inc =() =>{
        dispatch(incrementAmount(4))
    }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={()=> dispatch(increment())}>about incre</button>
      <button onClick={()=> inc()}>about incrementAmount</button>
    </div>
  )
}

export default About
