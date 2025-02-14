import React from 'react'

const Navbar = (props) => {

    let navbarval = props.value

  return (
    <div>
        
      <h1>navbar component</h1>

        navbar:{navbarval}

    </div>
  )
}

export default Navbar
