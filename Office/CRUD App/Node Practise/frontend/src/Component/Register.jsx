import React, { useState } from 'react'

const Register = () => {

    const [user,setUser] = useState({})

    const getuser = (e) => {
        setUser({ ...user,[e.target.name]:e.target.value })
    }

    const postuser = (e) =>{
        e.preventDefault();
        console.log(user);
    }

  return (
    <>
      <div className="register">
        <h1>Register Form</h1>
        <form onSubmit={postuser}>
            <div>
                <input type="text" name="name" placeholder='Enter your name' onChange={getuser} />
            </div>
            <div>
                <input type="text" value={user.name} />
            </div>
            <div>
                <input type="text" name="email" placeholder='Enter your Email' onChange={getuser} />
            </div>
            <div>
                <input type="text" name="password" placeholder='Enter your Password' onChange={getuser}/>
            </div>
            <div>
                <button>Register</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Register
