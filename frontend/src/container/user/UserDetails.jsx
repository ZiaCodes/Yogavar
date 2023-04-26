import React from 'react'
import Heading from "../../components/Misc/Form/Heading"
import { useAuth } from "../../hooks";
import {MdEmail} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import {BiMaleFemale} from 'react-icons/bi'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {BsFillBuildingsFill} from 'react-icons/bs'
import {MdContentCopy} from 'react-icons/md'

const UserDetails = () => {

    const copyUserId = () =>{
        console.log("Clicked");
    }

    const { authInfo} = useAuth();
    const userName = authInfo.profile?.name;
    const userId = authInfo.profile?.id;
    const email = authInfo.profile?.email;

  return (
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
          <MdContentCopy 
          onClick={copyUserId}
          />
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
          <p style={{color:'rgb(59,130,246)',fontWeight:'bolder',marginTop:'20px',cursor:'pointer'}}>
            Edit
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default UserDetails