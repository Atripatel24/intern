import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors , isSubmitting}
    } = useForm();

    const delay = (i) => {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve();
            }, i*1000);
        })
    }

    const onSubmit = async (data) => {
        await delay(2);
        console.log(data);
        if(data.username !== "asdf"){
            setError("myform",{message:"you are login"})
        }
        else{
            setError("blocked",{message:"you are blocked"})
        }
    }

    return (
        <>
        <div>
            <h1>Form</h1>

            {isSubmitting && <h4>Loading... <i className="fa-solid fa-spinner"></i></h4>}


            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username" , {required:{value:true , message:"UserName Required"}, minLength:{value:3,message:"Minimum 3 character"},maxLength:{value:8,message:"Maximum 8 Character"}})} type="text"  placeholder="Enter username"  />

               <div> {errors.username && errors.username.message} </div> <br />

                <input {...register("password",{required:{value:true, message:"Password is Required"}})} type="text" placeholder="Enter Password" />

               <div> {errors.password && errors.password.message} </div>
                <br />
                <button type="submit" disabled={isSubmitting}>Submit</button>
                <br /><br />
                {errors.myform && errors.myform.message}
                {errors.blocked && errors.blocked.message}
                {}

            </form>

        </div>
        </>
    )
}

export default Form
