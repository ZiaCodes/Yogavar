import React, {useState} from 'react'
import { subscriToNewsLetter } from '../apis/subscribe';
import { isValidEmail } from '../utils/helper';
import { useNotification } from '../hooks';


const validateUserInfo = ({email}) =>{

    if(!email.trim()) return {ok:false, error:'Email is missing!'}
    if(!isValidEmail(email)) return {ok:false, error:'Invalid Email'}
  
    return {ok:true}
  }

const Subscribe = () => {
    const { updateNotification } = useNotification();
    const [userEmail, setUserEmail] = useState({
        email : "",
    })

    const handleChange = ({target}) =>{
        const {value,name} = target;
        setUserEmail({...userEmail,[name]:value});
    }

    const handleEmailInput = async(e) =>{ 
        e.preventDefault()
        const {ok, error} = validateUserInfo(userEmail)
        if(!ok) return updateNotification("error",error);

        const result = await subscriToNewsLetter(userEmail);
        if(result.error) return updateNotification("warning",result.error);

        return updateNotification('success',"You have been Subscribed!")
    }
  return (
    <>
    <form onSubmit={handleEmailInput} className="news-letter">
        <input 
        value={userEmail.email}
        className='email-input-sub' 
        placeholder='Your Email'
        type="email" 
        name="email"
        onChange={handleChange}
        />

        <button type="submit">Subscribe</button>
      </form>
    </>
  )
}

export default Subscribe
