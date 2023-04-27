import React from 'react'
import CustomLink from "../CustomLink";
import {useAuth } from '../../../hooks';
import {MdLogout} from "react-icons/md";
import {ImProfile} from 'react-icons/im';
import {GrYoga} from 'react-icons/gr';
import {MdWorkHistory} from 'react-icons/md';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {MdClass} from 'react-icons/md';
import {MdCalendarMonth} from 'react-icons/md';
import {MdSavings} from 'react-icons/md';
import {MdCardMembership} from 'react-icons/md';
import {GiMeditation} from 'react-icons/gi';
import {GrArticle} from 'react-icons/gr';
import {GiSunPriest} from 'react-icons/gi';
import {GrDocumentTime} from 'react-icons/gr';
import {MdEmojiObjects} from 'react-icons/md';
import {AiTwotoneCustomerService} from 'react-icons/ai';
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {GrResources} from 'react-icons/gr'

const Sidebar = () => {
  const {authInfo,handleLogout} = useAuth()
  const {isLoggedIn} = authInfo;

  const userName = authInfo.profile?.name;

  return (
    <div className="sidebar">

          <ul className="user">
            {
                isLoggedIn ? (<li className='user-name'>{userName}</li>) : (<li className='user-name'> Hello User</li>)
            }
            <li><ImProfile/> My Profile</li>
            <li><RiMoneyDollarCircleFill/> Subscription</li>
            <li><GrYoga/> Yoga Life</li>
            <li><GiSunPriest/> Asaans</li>
            <li><MdWorkHistory/> History</li>
            <li><FaChalkboardTeacher/> Mentors</li>
            <li><MdClass/> Class</li>
            <li><MdCalendarMonth/> Monthly Plan</li>
            <li><MdCalendarMonth/> Annual Plan</li>
            <li><MdSavings/> Benefits</li>
            <li><MdCardMembership/> Membership</li>
            <li><GiMeditation/> Meditation</li>
            <li><GrResources/>Online Resources</li>
            <li><GrArticle/> Articles</li>
            <li><GrDocumentTime/> Book Your Slot</li>
            <li><MdEmojiObjects /> Demo</li>

            <li><AiTwotoneCustomerService/> Contact</li>
            {
                isLoggedIn ? (
                    <ul className='login-register'>
                        <li><MdLogout/></li>
                        <li onClick={handleLogout}> Logout</li>
                    </ul>
                ) : (
                    <ul className='login-register'>
                        <CustomLink to="/auth/signin">
                        <li style={{padding:'5px',color:'#000'}}>Sign In</li>
                        </CustomLink>
                        <CustomLink to="/auth/signup">
                        <li style={{border:'1px solid #000',
                        borderRadius:'3px',padding:'5px',color:'#000'
                            }}>Sign Up</li>
                        </CustomLink>
                    </ul>
                )
            }
          </ul>
    </div>
  )
}

export default Sidebar