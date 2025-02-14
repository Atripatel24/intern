import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Register = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState({ name: "", email: "", password: "", profile: null });

  const profilePreviewStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '0 auto 20px',
    display: 'block',
    objectFit: 'cover',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    setUser({
      ...user, profile: file
    })
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const userHandler = (e) =>{
      setUser({ ...user , [e.target.name] : e.target.value })
  }

  const registerHandler = async(e) =>{
    e.preventDefault();

    let formdata = new FormData();

    formdata.append('name' , user.name);
    formdata.append('email', user.email);
    formdata.append('password',user,password);
    formdata.append('profile',user.profile);

    try{

      let res = axios.post('http://localhost:4000/api/user/register',formdata)

      if(res.data.success){
       Swal.fire({
        title:'Success !',
        text:res.data.message ,
        icon:'error'
       }).then(()=>{
        Navigate('/login')
       })
      }else{
        Swal.fire({
          title:'error !',
          text:res.data.message ,
          icon:'error'
         })
      }

    }catch (err) {
      console.log(err);
      Swal.fire({
        title:'error !',
        text:err ,
        icon:'error'
       })
    }

  }


  return (
    <>
      <div className='container'>
        <h2>Registration Form</h2>
        <form encType='multipart/form-data' onSubmit={registerHandler}>

          {/* Profile Picture Preview */}
          {profilePic ? (
            <img src={profilePic} alt="Profile Preview" style={profilePreviewStyle} />
          ) : (
            <div
              style={{
                ...profilePreviewStyle, backgroundColor: '#404052', display: 'flex',
                alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem',
              }}>
              No Image
            </div>
          )}

          <label htmlFor="">Name : </label>
          <input type="text" placeholder='enter name' name='name' onChange={userHandler}/>

          <label htmlFor="">Email Id :</label>
          <input type="text" placeholder='enter email id' name='email' onChange={userHandler}/>

          <label htmlFor="">Password :</label>
          <input type="text" placeholder='enter password' name='password' onChange={userHandler}/>

          <label htmlFor="">Profile :</label>
          <input type="file" style={{ border: '1px solid ', borderRadius: '5px' }} 
          onChange={handleProfileChange}  accept="image/*"/>


          <button>Submit</button>

        </form>
      </div>
    </>
  )
}

export default Register
