import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Heading from '../../components/Misc/Form/Heading'
import InputField from '../../components/Misc/Form/InputField'
import SubmitBtn from '../../components/Misc/Form/SubmitBtn'
import CustomLink from '../../components/Misc/CustomLink'
import heroImage from '../../assets/logo.svg'
import { useNotification } from '../../hooks'
import {ImSpinner3} from 'react-icons/im'
import { resetPassword, verifyPasswardResetToken } from '../../apis/auth'

const ConfirmPassword = () => {
    const {updateNotification} = useNotification();
    const [searchParam] = useSearchParams()
    const [password,setPassword] = useState({
        one:"",
        two:""
    })
    const [isVerifying, setIsVerifying] = useState(true);
    const [isValid, setIsValid] = useState(false);

    const token = searchParam.get('token');
    const id = searchParam.get('id');
    
    const navigate = useNavigate();

    useEffect(()=>{
        isValidToken();
    },[])

    const isValidToken = async() =>{
        const {error, valid} = await verifyPasswardResetToken(token, id);
        
        setIsVerifying(false);
        if(error) {
            navigate('/auth/reset-password',{replace: true});
            return updateNotification("error", error);
        }
        if(!valid){
            setIsValid(false);
            return navigate('/auth/reset-password',{replace: true});
        }
        setIsValid(true);
    }

    const handleChange = ({target}) =>{
        const {name, value} = target;
        setPassword({...password,[name]:value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(!password.one)  
            return updateNotification("error", "password is missing");

        if(password.one.trim().length < 8) 
            return updateNotification("error", "Password must be 8 character long.");

        if(password.one !== password.two)
            return updateNotification("error", "Password do not match.");

            console.log(password)

        const {error, message} = await resetPassword({newPassword: password.one, userId: id, token: token});
        console.log(error, message)
        if(error) return updateNotification('error',error)

        updateNotification('success', message);
        navigate('/auth/signin', {replace:true});
    }


    if(isVerifying)
        return(
            <>
            <div className="heroImage">
                <img src={heroImage} alt="register" />
            </div>
            
            <div className="ending-quote">
                <ImSpinner3 className='animate-spin'/>
                <p className='ending-quote-bold'>
                    Please wait we are verifying your token.
                </p>
            </div>
            </>
        )


        if(!isValid)
        return(
            <>
            <div className="heroImage">
                <img src={heroImage} alt="register" />
            </div>
            
            <div className="ending-quote">
                <p className='ending-quote-bold'>
                    Sorry, the token is invalid !
                </p>
            </div>
            </>
        )



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
        value={password.one}
        onChange = {handleChange}
        name='one'
        placeholder='New password'
        type='password'
        />
        <InputField 
        value={password.two}
        onChange = {handleChange}
        name='two'
        placeholder='Confirm password'
        type='password'
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