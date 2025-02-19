import React from 'react'
import {useForm} from 'react-hook-form'

const ReactForm = () => {

  // npm i react-hook-form
    
    const { handleSubmit , register } = useForm()

    const submit = (user) =>{
        console.log(user)
    }

  return (
    <div>
       <form onSubmit={handleSubmit(submit)} >
        <h1>Detail Form</h1>

        <label>Name : </label>
        <input type="text" {...register("name")} /> <br />

        <label>Email : </label>
        <input type="text" {...register("email")}/> <br />

        <label>Password : </label>
        <input type="text" {...register("password")} /> <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReactForm
