import React , {useContext} from 'react'
import { counter } from '../App'


const About = () => {

    const val = useContext(counter)

  return (
    <div className='div'>
     <h1>UseContext count is {val.count}</h1>
    </div>
  )
}

export default About
