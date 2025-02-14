import React , {useContext} from 'react'
import { counter } from '../App'


const About = () => {

    const val = useContext(counter)

  return (
    <>
     <h1>{val.count}</h1>
    </>
  )
}

export default About
