import { useState } from 'react'

function Validation() {

    const [name, setname] = useState("")
    const [pass, setpass] = useState("")

    const [nameerr, setnameerr] = useState(false)
    const [passerr, setpasserr] = useState(false)

    function getdata(e) {
    
        if(name.length < 3 || pass.length < 3){
            alert("Fill Correct Value");
        }else{
            alert("Data Submitted");
        }

        e.preventDefault()
    }

    function namehandle(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setnameerr(true)
        } else {
            setnameerr(false)
        }
        setname(item)
    }

    function passwordhandle(e) {
        let password = e.target.value;
        if (password.length < 3) {
            setpasserr(true)
        } else {
            setpasserr(false)
        }
        setpass(password)
    }


    return (
        <>
            <form onSubmit={getdata}>

                Name: <input type="text" onChange={namehandle} /><br /><br />
                {nameerr ? <h4>name not valid</h4> : ""}

                Password: <input type="text" onChange={passwordhandle} /><br />
                {passerr ? <h4>password not valid</h4> : ""}

                <br />
                <button type='submit'>Submit</button>

            </form>
        </>
    )
}

export default Validation
