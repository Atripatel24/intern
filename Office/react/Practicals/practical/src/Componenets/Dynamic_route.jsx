import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Dynamic_Route = () => {
    const data = useLocation();
    const user = data.state; 

    const navigate = useNavigate();
  
    return (
      <div className='div'>
  
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{user.name}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{user.email}</td>
            </tr>
            </tbody>
        </table>

      <button className='dy-btn' onClick={()=> navigate('/')} >back</button>
      </div>
    
  )
}

export default Dynamic_Route
