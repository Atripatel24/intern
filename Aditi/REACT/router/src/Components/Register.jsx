import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {

    const [number, setNumber] = useState(0)
    let x = useRef(0)
    let btn = useRef()

    let clickbtn = () => {
        setNumber(number + 1)
    }
    useEffect(() => {
        x.current += 1
        console.log("render")
        console.log(x.current)
        btn.current.style.backgroundColor = "blue"
        btn.current.style.color = "white"
    })

    return (
        <div>
            <div>
                <h1>Register page</h1>
                <p>{number}</p>
                <button onClick={clickbtn}>click</button>
                <button ref={btn}>style</button>
            </div>
            <br /><br />
            <div>
                <Link to={"/"}>Home</Link> &nbsp;&nbsp;&nbsp;
                <Link to={"/login"}>Login</Link>
            </div>
        </div>
    )
}

export default Register
