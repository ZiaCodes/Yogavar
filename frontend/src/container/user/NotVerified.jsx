import React, { useEffect } from 'react'
import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom';

const NotVerified = () => {
    const {authInfo} = useAuth();
    console.log(authInfo)
    const { isLoggedIn } = authInfo;
  
    const isVerified = authInfo.profile?.isVerified;

    const navigate = useNavigate()
  
    const navigateToVerification = () =>{
      navigate('/auth/verification',{state:{user: authInfo.profile}})
    }
  
    return (
      <div  className="Wrapper">
        {
          isLoggedIn && !isVerified ? (
            <p className='verify-warning-text'>
          It's look like you haven't verified your account?<br />
          <button onClick={navigateToVerification} className='verify-btn'>verify your account</button>
        </p>
          ): null
        }
      </div>
    )
}

export default NotVerified