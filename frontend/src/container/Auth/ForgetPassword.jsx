import React, { useState } from 'react'
import heroImage from '../../assets/logo.svg'
import Heading from '../../components/Misc/Form/Heading'
import InputField from '../../components/Misc/Form/InputField'
import CustomLink from '../../components/Misc/CustomLink'
import SubmitBtn from '../../components/Misc/Form/SubmitBtn'


const ForgetPassword = () => {
    const [email, setEmail] = useState('')

    const handleChange = ({target}) =>{
        const {value} = target;
        setEmail(value)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(email);
    };

  return (
    <>
    <div className="heroImage">
      <img src={heroImage} alt="register" />
    </div>
    <form onSubmit={handleSubmit} className="container">
        <Heading>
        <h5 style={{color:'#fff'}}>Please Enter your Email</h5>
        </Heading>

        <InputField 
        value={email}
        onChange = {handleChange}
        name='email'
        placeholder='john@gmail.com'/>
        <SubmitBtn value="Send link"/>

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

export default ForgetPassword