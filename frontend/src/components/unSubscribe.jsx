import React, { useState } from 'react'
import { useNotification } from '../hooks';
import {  unSubscriToNewsLetter } from '../apis/subscribe';
import { isValidEmail } from '../utils/helper';
import heroImage from '../assets/logo.svg'
import Heading from './Misc/Form/Heading';
import SubmitBtn from './Misc/Form/SubmitBtn';
import InputField from './Misc/Form/InputField';
import {TfiFaceSad} from 'react-icons/tfi';

const validateUserInfo = ({email}) =>{

    if(!email.trim()) return {ok:false, error:'Email is missing!'}
    if(!isValidEmail(email)) return {ok:false, error:'Invalid Email'}
  
    return {ok:true}
  }

const UnSubscribe = () => {
    const { updateNotification } = useNotification();
    const [userEmail, setUserEmail] = useState({
        email : "",
    })

    const [sub , setSub] = useState(true);

    const handleChange = ({target}) =>{
        const {value,name} = target;
        setUserEmail({...userEmail,[name]:value});
    }

    const handleSubmit = async(e) =>{ 
        e.preventDefault()
        const {ok, error} = validateUserInfo(userEmail)
        if(!ok) return updateNotification("error",error);

        const result = await unSubscriToNewsLetter(userEmail);
        if(result.error) return updateNotification("warning",result.error);

        setSub(false);
        return updateNotification('success',"You have been Unsubscribed!")
    }
  return (
    <>
      <div className="heroImage">
      <img src={heroImage} alt="register" />
    </div>
    <form onSubmit={handleSubmit} className="container">
        <Heading>
        <p className='ending-quote-bold'>
        WE ARE SORRY TO LET YOU GO 
        </p>
        <TfiFaceSad style={{fontSize:'3em',margin:'4px'}}/>
        </Heading>

          {
            sub ? (
              <>
              <InputField 
              value={userEmail.email}
              onChange={handleChange}
              name="email"
              placeholder='john@gmail.com'
          />
          <SubmitBtn value="UNSUBSCRIBE"/>
          </>
            ) : null
          }
                

            </form>
    </>
  )
}

export default UnSubscribe;
