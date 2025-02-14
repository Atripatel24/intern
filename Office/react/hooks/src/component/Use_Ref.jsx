import { useState , useRef , useEffect} from "react";

function UseRef() {

    const [count,setCount] = useState(0);
    const a = useRef();

    useEffect(() => {
      a.current.style.backgroundColor = "red"
      a.current.style.color = "white"
      console.log(`count is ${count}`);
    }, [count]);

    return(
        <>
        <h1>UserRef Example</h1>
        <h3>count is {count}</h3>
        <button ref={a} onClick={()=>{setCount(count+1)}}>Click Here </button>
        </>
    )

}

export default UseRef 