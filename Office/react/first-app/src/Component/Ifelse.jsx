import { useState } from "react"

function Condition (){

    const [login, setlogin]=useState(3)

    return(
        <>
        <h1>Condition Statement</h1>  <br />

        {login==1?<h1>Sign In</h1>:login==2?<h1>Sign Out</h1>:<h1>New User</h1>}
        </>
    )
}

export default Condition