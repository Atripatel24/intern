import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletedata, getdata, } from '../Redux/Slice/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Table = () => {

  const users = useSelector((state) => state.api.data)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getdata());
    // console.log('api', users)
  },);

 const deleteuser = (id) => {
    dispatch(deletedata(id))
    toast.error(`Delete User ${id}`)
  }

  return (
    <div>

      <div>
        <button className='btn'><Link to='/' className='link'>Form</Link></button>
      </div>

      {users == null ? <h1>Loading... <i className="fa-solid fa-spinner"></i></h1> :
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Password</th>
              <th>Birth Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.birthdate}</td>
                  <td>
                    <button className='editbtn'>
                      <Link className='link' to={`/user/${item.id}`} state={item}>Edit</Link>
                    </button>
                    <button className='deletebtn' onClick={()=> deleteuser(item.id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </div>
  )
}

export default Table
