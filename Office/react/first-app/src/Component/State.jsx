import { useState } from "react"

function State (){
 
    const [count , setcount] = useState("john")

    function change(){
        setcount("peter")
    }

    return( 
        <>
        <h1>{count}</h1> <br />
        <button onClick={change}>change name </button>
        </>
    )
}

export default State