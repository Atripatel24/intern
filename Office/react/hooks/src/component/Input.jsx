import { useState } from "react";

function Input (){

    const [form,setForm] = useState({email:"",phone:""})

    const event = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    return(
        <>
        Email: <input type="text" name="email" value={form.email} onChange={event} /> <br />
        Phone: <input type="text" name="phone" value={form.phone} onChange={event} />
        </>
    )
}

export default Input