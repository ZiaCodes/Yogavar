import React, { useEffect } from 'react'
import { useAuth } from '../../hooks'
import { Navigate, useNavigate } from 'react-router-dom';

const UserPage = () => {

  const {authInfo} = useAuth();
  const { isLoggedIn } = authInfo;
  const navigate = useNavigate()

  useEffect(()=>{
    if(!isLoggedIn) navigate('/auth/signin');
  },[isLoggedIn])

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',height:'100vh',gap:'10px'}}>
      <h4>Welcome user</h4>
    </div>
  )
}

export default UserPage