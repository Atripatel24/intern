import React from 'react'
import Navbar from './Navbar'

const Home = (props) => {
    // js
    let i = 2

    let propval = props.data
    console.log(propval)
  return (
    <div>
      {/* html */}
      <h1>home component</h1>
      <h1>{propval}</h1>
      { i>3 ? <h1>i is 4</h1> :  <h1>i is less 3</h1>}

    <Navbar value={propval}/>

    </div>
  )
}

export default Home


