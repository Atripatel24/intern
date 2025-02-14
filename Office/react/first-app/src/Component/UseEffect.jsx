import { useEffect, useState } from "react"

function Effect (){

    const [count,setCount] = useState(0);

    // run on every render

    useEffect(() => {
        alert("Every Render");
        
    });

    // run on first render
    useEffect(() => {
        alert("First Render");
        
    }, []);

    // run only when certain value change

    useEffect(() => {
        alert("changeble render");
        
    }, [count]);


    return(
        <>
        <h1>UseEffect Example</h1>
        <h4>count is {count}</h4>
        <button onClick={()=>{setCount(count+1)}}>change count</button>
        </>
    )
}

export default Effect