import Heading from "../../components/Misc/Form/Heading"
import InputField from '../../components/Misc/Form/InputField'
import SubmitBtn from '../../components/Misc/Form/SubmitBtn'
import { useAuth } from "../../hooks";
import {MdEmail} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import {BiMaleFemale} from 'react-icons/bi'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {BsFillBuildingsFill} from 'react-icons/bs'
import {MdContentCopy} from 'react-icons/md'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const UserDetails = () => {

    const [open,setOpen] = useState(false)

    const navigate = useNavigate();

    const { authInfo} = useAuth();
    const {isLoggedIn} = authInfo;
    const userName = authInfo.profile?.name;
    const userId = authInfo.profile?.id;
    const email = authInfo.profile?.email;

    useEffect(()=>{
      if(!isLoggedIn) navigate('/auth/signin')
    },[isLoggedIn])

  return (
    <>
    {
        open && 
        <div className="model-box">
            <form className="container extra-styling-for-edit-profile">
                <Heading>
                    <h3 style={{color:'#fff'}}>
                Edit Details
                    </h3>
                </Heading>

                <div className="dob-gender">
                    <select name="Gender">
                        <option value="gender">Select your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <input type="date" 
                    name="dob" 
                    value="2000-01-01"
                    />
                </div>
      
                <InputField
                name="PhoneNumber"
                placeholder='Phone Number'
                />

                <InputField
                name="company"
                placeholder='Company'
                />

                <div style={{display:'flex',gap:'5px'}}>
        
                </div>
                    <div className="useful-links">
                    <SubmitBtn value="Save"/>
                    <button 
                    onClick={()=> setOpen(!open)}
                    className="submit-btn" 
                    type="button">
                        Close
                    </button>
                </div>
            </form>
        </div>
    }
        <div className="user-update-form">
      <div className="user-info-container">
      <div className="profile-img">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
          width="100px" alt="profile" 
        />
      </div>

      <div className="user-details">
        <p className="ending-quote-bold">{userName}</p>
      </div>

      <Heading>
        <p className="ending-quote-bold extra-styling">
          User Details
        </p>
      </Heading>

      <div className="user-details-conatiner">
        <div className="user-field-name">
          <p><b>{userId}</b></p>
          <MdContentCopy />
        </div>
        <div className="user-field-name">
          <MdEmail/>
          <p>{email}</p>
        </div>
        <div className="user-field-name">
          <FaBirthdayCake/>
          <p>24th Dec,1999</p>
        </div>
        <div className="user-field-name">
          <BiMaleFemale/>
          <p>Male</p>
        </div>
        <div className="user-field-name">
          <RiContactsBook2Fill/>
          <p>8918054789</p>
        </div>
        <div className="user-field-name">
          <BsFillBuildingsFill/>
          <p>Google Inc</p>
        </div>

        <div className="edit-btn">
          <p 
          onClick={()=> setOpen(!open)}
          style={{color:'rgb(59,130,246)',fontWeight:'bolder',marginTop:'20px',cursor:'pointer'}}>
            Edit
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default UserDetails