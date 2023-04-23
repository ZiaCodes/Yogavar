import React, { useEffect, useState } from 'react'
import heroImage from '../../assets/logo.svg'
import { isValidEmail } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import Heading from '../../components/Misc/Form/Heading';
import InputField from '../../components/Misc/Form/InputField';
import SubmitBtn from '../../components/Misc/Form/SubmitBtn';
import CustomLink from '../../components/Misc/CustomLink';
import {useNotification} from '../../hooks/index'
import { signInUser } from '../../apis/auth';

const validateUserInfo = ({email,password}) =>{

  if(!email.trim()) return {ok:false, error:'Email is missing!'}
  if(!isValidEmail(email)) return {ok:false, error:'Invalid Email'}

  if(!password.trim()) return {ok:false, error:'Password is missing!'}
  if(password.length < 8) return {ok:false, error:'Password must be 8 character long!'}

  return {ok:true}
}



const Login = () => {

  const navigate = useNavigate();
  const { updateNotification } = useNotification();

  const [userInfo,setUserinfo] = useState({
    email:"",
    password:""
  })

  const handleChange = ({target})=>{
    const {value,name} = target;
    setUserinfo({...userInfo,[name]:value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    console.log(userInfo);
    const {ok, error} = validateUserInfo(userInfo)

    if(!ok) return updateNotification("error",error);
    const response = await signInUser(userInfo);
    if(response.error) return updateNotification("error",response.error);
  }

  const {email, password} = userInfo;
  return (
  <>
    <div className="heroImage">
      <img src={heroImage} alt="register" />
    </div>
    <form onSubmit={handleSubmit} className="container">

      <Heading>
        <h3 style={{color:'#fff'}}>Login Form</h3>
      </Heading>
      
      

      <InputField 
          value={email}
          onChange={handleChange}
          name="email"
          placeholder='john@gmail.com'
      />

      <InputField 
          value={password}
          onChange={handleChange}
          name="password"
          placeholder='********'
          type="password"
      />

    <SubmitBtn value="Sign Up"/>
    <div className='useful-links'>
      <CustomLink to="/auth/forget-password">
        Forget Password
      </CustomLink>
      <CustomLink to="/auth/signup">
        Sign Up
      </CustomLink>
    </div>

    </form>
  </>
        
  )
}

export default Login