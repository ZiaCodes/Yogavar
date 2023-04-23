import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SubmitBtn from '../../components/Misc/Form/SubmitBtn';
import Heading from '../../components/Misc/Form/Heading';
import heroImage from '../../assets/logo.svg'
import { verifyUserEmail } from '../../apis/auth';
import { useNotification } from '../../hooks';

const isValidOtp = (otp) =>{
  let valid = false;

  for(let val of otp){
    valid = !isNaN(parseInt(val));
    if(!valid) break;
  }

  return valid;
}

const OTP_LENGTH = 6;

const EmailVerification = () => {
  const [otp,setOtp] = useState(new Array(OTP_LENGTH).fill(''))
  const [activeOtpIndex,setActiveOtpIndex] = useState(0)

  const inputRef = useRef()

  const navigate = useNavigate();
  const { updateNotification } = useNotification();

  const {state} =useLocation();
  const user = state?.user;

  const focusNextInputField = (index) =>{
    setActiveOtpIndex(index + 1)
  }

  const focusPrevInputField = (index) =>{
    let nextindex;
    const diff = index-1;
    nextindex = diff!==0 ? diff : 0;
    setActiveOtpIndex(nextindex)
  }

  const handleOtpChange = ({target},index) =>{
    const {value} = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length-1, value.length);
    
    if(!value)
      focusPrevInputField(index);
    else
      focusNextInputField(index);

    setOtp([...newOtp])
  }

  // const handleKeyDown = ({key},index) => {
  //   if(key ==='Backspace'){
  //     focusPrevInputField(index)
  //   }
  // }


  const handleResendEmailOTP = async() =>{
    
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!isValidOtp(otp)) return updateNotification("error","Invalid otp");
    const {error, message } = await verifyUserEmail({OTP:otp.join(''), userId:user.id}) 
    if(error) return updateNotification("error",error);

    updateNotification("success", message);

  }

  useEffect(() => {
    inputRef.current?.focus()
  },[activeOtpIndex]);

  useEffect(()=>{
    if(!user) navigate('/not-found')
  },[user])

  return (

  <>
    <div className="heroImage">
      <img src={heroImage} alt="register" />
    </div>
    <form onSubmit={handleSubmit} className="container">
        <Heading>
        <h5 style={{color:'#fff'}}>Please enter the Otp to verify your account</h5>
        </Heading>

              <div className='otp-container'>
              {otp.map((_,index) =>{
                return <input
                  ref={activeOtpIndex=== index ? inputRef : null}
                  type="number" 
                  key={index}
                  value={otp[index] || ""}
                  onChange={(e) => handleOtpChange(e,index)}
                  // onKeyDown={(e) => handleKeyDown(e,index)}
                  style={{
                    width:'40px',
                    height:'40px',
                    textAlign:'center',
                    outline:'none',
                    border:'none',
                    margin:'5px',
                    borderRadius:'3px',
                    fontWeight:'bolder',
                    fontSize:'22px',
                  }} />
              })}
              </div>
                
                <div style={{
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                }}>
                  <SubmitBtn value="Verify OTP"/>
                  <button
                  type='button'
                  onClick={handleResendEmailOTP}
                  style={{
                    background:'none',
                    outline:'none',
                    border:'none',
                    color:'#fff',
                    textDecoration:'underline',
                    fontSize:'10px',
                  }}>
                    I don't have OTP
                  </button>
                </div>

            </form>
  </>
  )
}

export default EmailVerification