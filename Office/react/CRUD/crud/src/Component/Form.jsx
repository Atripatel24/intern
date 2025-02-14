import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postdata, updatedata } from '../Redux/Slice/api'
import { toast } from 'react-toastify'

const Form = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useLocation();
  const user = data.state
  // console.log(user);

  const [formdata , setFormdata] = useState({ name: '' , pass: ""})

  console.log(formdata)

   const {
    handleSubmit, 
    register,
    setValue,
    formState:{errors , isSubmitting}
   } = useForm();

   useEffect(() => {
    if(user){
      setValue('name',user.name)
      setValue('email',user.email)
      setValue('password',user.password)
      setValue('birthdate',user.birthdate)
    }
   }, [user,setValue]);

   const delay = (i,data) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
            if(user){
            const updateuser = {'id':user.id , ...data}
              dispatch(updatedata(updateuser))
              toast.success(`Update User ${user.id}`)
            }else{
              dispatch(postdata(data));
              toast.success(" Form Submitted ")
            }
            navigate('/table')
        }, i*1000);
    })
}

const onSubmit = async (data) => {
    await delay(1 ,data);
    // console.log(data);
}


const onError = (errors) => {
  Object.keys(errors).forEach((key) => {
    toast.warn(errors[key]?.message);
  });
};

    function table() {
      navigate('/table')
    }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit(onSubmit,onError)}>
        
        <h2><i>Detail Form</i></h2>

        <label>Name :</label><br />
        <input {...register("name",{required :{value:true ,message:"Name is Required"}})} type="text" placeholder='enter name' />

        <div className='error'> {errors.name && errors.name.message} </div> <br />

        <label>Email Id :</label><br />
        <input {...register("email",{required:{value:true , message:"Email Id is Required"}})}type="email" placeholder='enter email id' />

        <div className='error'> {errors.email && errors.email.message} </div> <br />

        <label>Password :</label><br />
        <input {...register("password", {required:{value:true , message:"Password is Required"},minLength:{value:4 , message:"Minimum 4 character required"}})} type="text" placeholder='enter password' />

        <div className='error'> {errors.password && errors.password.message} </div> <br />

        <label>Birth Date :</label><br />
        <input {...register("birthdate",{required:{value:true ,message:"Birthdate is Required"}})} type="date"  />

        <div className='error'> {errors.birthdate && errors.birthdate.message} </div> <br />

    {isSubmitting && <h1>Submitting... <i className="fa-solid fa-spinner"></i></h1>}

    { !user ? <button disabled={isSubmitting} className="button" >Submit</button> :
     <button disabled={isSubmitting} className="button" >Update</button> }
        &nbsp;&nbsp;

        <button onClick={table} className='button' >Table</button>

      </form>
    </div>
    </>

  )
}

export default Form
