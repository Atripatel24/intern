import { useState } from "react"

function Input(){

    const [name,setname]=useState(null)
    const [print, setprint] = useState(false)

    function event(e){
        setname(e.target.value)
        setprint(false)
    }

    return(
        <>
        <input type="text" onChange={event} />
        <button onClick={()=>setprint(true)}>get name</button>
        {print?<h1>{name}</h1>:null}

        </>
    )
}
export default Input