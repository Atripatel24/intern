import { useState } from "react"

function Condition(){
 
    const [btnshow,setbtnshow] = useState(false);
    const [todos,settodos] = useState([
        {
            tittle:"todo 1",
            desc:"hey todo 1"
        },
        {
            tittle:"todo 2",
            desc:"hey todo 2 "
        }
    ]);

   

    return(
        <>
        <h1>Condition Rendering</h1>
        {/* btnshow is true then below button show   */}
        {btnshow && <button>first button clicked</button>}
        <button onClick={()=>{setbtnshow(!btnshow)}}>First Button</button>

        {todos.map(todo => {
            return  <>
                    <div key={todo.tittle}>
                    <div>{todo.tittle}</div>
                    <div>{todo.desc}</div>
                    </div>
                   </>    
        })}
        </>
    );
}

export default Condition 