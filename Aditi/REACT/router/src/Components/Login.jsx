import React from 'react'
import { useLocation , Link, useNavigate } from 'react-router-dom'

const Login = () => {

    let value = useLocation();
    console.log(value)

    let navigate = useNavigate()

    let btnclick = () =>{
        navigate("/register")
    }

    return (
        <div>
            <h1>Login page</h1>
            <p>{value.state}</p>
            <div>
                <Link to={"/"} >Home</Link> &nbsp;&nbsp;&nbsp;
                {/* <Link to={"/register"}>Register</Link> */}
                <button onClick={btnclick}>register</button>
            </div>
        </div>
    )
}

export default Login
