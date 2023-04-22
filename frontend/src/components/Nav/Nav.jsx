import { GiHamburgerMenu } from "react-icons/gi";
import {TbYoga} from 'react-icons/tb'
import {BsCalendarPlusFill} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineWbSunny} from 'react-icons/md'
import {FiMoon} from 'react-icons/fi'
import {VscColorMode} from 'react-icons/vsc'
import {AiFillHome} from 'react-icons/ai'

import { useState } from "react";

import CustomLink from "../utils/CustomLink";


const Nav = () => {
  const [showNavigation,setShownavigation] = useState(false);
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <CustomLink to="/">
          <span><TbYoga/> YogaGavar</span>
          </CustomLink>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <CustomLink>
                <GiHamburgerMenu className="profile-menu" onClick={()=> setShownavigation(!showNavigation)} />
              </CustomLink>
            </li>
            { showNavigation && <div className="hidden">
              <ul>
                <li className="drop-theme">
                <div className="theme">

                  <CustomLink to="/">
                  <AiFillHome/> Home
                  </CustomLink>

                  <CustomLink to="/register">
                  <BsCalendarPlusFill/> Booking
                  </CustomLink> 

                  <CustomLink to="/about">
                  <BiMessageSquareDetail/> About
                  </CustomLink>

                  <CustomLink to="/contact">
                  <RiCustomerService2Fill/> Contact
                  </CustomLink>

                  </div>
                </li>
 
                <li className="drop-theme">
                  <div className="theme">
                    <p><MdOutlineWbSunny/></p>
                    <p><FiMoon/></p>
                    <p><VscColorMode/></p>
                  </div>
                </li>

              </ul>
            </div>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
