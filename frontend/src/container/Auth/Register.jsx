import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/logo.svg'
import {isValidEmail} from '../../utils/helper'
import {createUser} from '../../apis/auth'
import Heading from '../../components/Misc/Form/Heading';
import InputField from '../../components/Misc/Form/InputField';
import SubmitBtn from '../../components/Misc/Form/SubmitBtn';
import CustomLink from '../../components/Misc/CustomLink';
import {useAuth, useNotification} from '../../hooks/index'


const validateUserInfo = ({name,email,password}) =>{

    const isValidName = /^[a-z A-Z]+$/

    if(!name.trim()) return {ok:false,error:'Name is missing!'}
    if(!isValidName.test(name)) return {ok:false, error:'Invalid name!'}

    if(!email.trim()) return {ok:false, error:'Email is missing!'}
    if(!isValidEmail(email)) return {ok:false, error:'Invalid Email'}

    if(!password.trim()) return {ok:false, error:'Password is missing!'}
    if(password.length < 8) return {ok:false, error:'Password must be 8 character long!'}

    return {ok:true}
}

const Register = () => {

  const navigate = useNavigate();
  const { updateNotification } = useNotification();
  const { authInfo} = useAuth();
  const {isLoggedIn} = authInfo;

  const [userInfo,setUserinfo] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    gender:"",
    age:"",
    company:"",
    password:""
  })

  const handleChange = ({target})=>{
    const {value,name} = target;
    setUserinfo({...userInfo,[name]:value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const {ok, error} = validateUserInfo(userInfo)

    if(!ok) return updateNotification("error",error);

    const response = await createUser(userInfo);
    if(response.error) return updateNotification("error",response.error);

    navigate('/auth/verification',{
      state:{ user: response.user },
      replace:true,
    });
  }

  useEffect(()=>{
    if(isLoggedIn) navigate('/user/profile')
  },[isLoggedIn])

  const {name, email, password} = userInfo;

  return (
    <>
    <div className="heroImage">
      <img src={heroImage} alt="register" />
    </div>

    <form onSubmit={handleSubmit} className="container">

      <Heading>
        <h3 style={{color:'#fff'}}>Register Form</h3>
      </Heading>
      
      <InputField
          value={name}
          onChange={handleChange}
          name="name"
          placeholder='john Doe'
      />

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

    <SubmitBtn value="Register"/>
    
    <div className='useful-links'>
      <CustomLink to="/auth/forget-password">
        Forget Password
      </CustomLink>
      <CustomLink to="/auth/signin">
        Sign In
      </CustomLink>
    </div>

    </form>
    </>

  )
}

export default Register