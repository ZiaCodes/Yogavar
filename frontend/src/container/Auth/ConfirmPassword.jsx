import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Heading from '../../components/Misc/Form/Heading'
import InputField from '../../components/Misc/Form/InputField'
import SubmitBtn from '../../components/Misc/Form/SubmitBtn'
import CustomLink from '../../components/Misc/CustomLink'
import heroImage from '../../assets/logo.svg'
import { useNotification } from '../../hooks'

const ConfirmPassword = () => {
    const [password, setPassword] = useState('')
    const [searchParam] = useSearchParams()
    const token = searchParam.get('token');
    const id = searchParam.get('id');
    console.log(token, id)
    const {updateNotification} = useNotification();

    const handleChange = ({target}) =>{
        const {value} = target;
        setPassword(value)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
    }
  return (
    <>
    <div className="heroImage">
      <img src={heroImage} alt="register" />
    </div>
    <form onSubmit={handleSubmit} className="container">
        <Heading>
        <h5 style={{color:'#fff'}}>Please create a new password</h5>
        </Heading>

        <InputField 
        value={password}
        onChange = {handleChange}
        name='password'
        placeholder='New password'
        />
        <InputField 
        value={password}
        onChange = {handleChange}
        name='password'
        placeholder='Confirm password'
        />

        <SubmitBtn value="Create"/>
        <div className='useful-links'>
            <CustomLink to="/auth/signin">
                Sign In
            </CustomLink>
            <CustomLink to="/auth/signup">
                Sign Up
            </CustomLink>
        </div>

    </form>
    </>
  )
}

export default ConfirmPassword