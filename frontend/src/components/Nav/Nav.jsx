import { RxAvatar } from "react-icons/rx";
import {TbYoga} from 'react-icons/tb'
import {BsCalendarPlusFill} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiCustomerService2Fill} from 'react-icons/ri'

import { useState } from "react";

import CustomLink from "../utils/CustomLink";


const Nav = () => {
  const [showNavigation,setShownavigation] = useState(true);
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <CustomLink to="/">
          <TbYoga/>Yo<span>Gavar</span>
          </CustomLink>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <CustomLink>
                <RxAvatar className="profile-menu" onClick={()=> setShownavigation(!showNavigation)} />
              </CustomLink>
            </li>
            { showNavigation && <div className="hidden">
              <ul>
                <li className="drop-down">
                  <CustomLink to="/register">
                  <BsCalendarPlusFill/> Book your slot
                  </CustomLink> 
                </li>
                <li className="drop-down">
                  <CustomLink to="/about">
                  <BiMessageSquareDetail/>
                  About
                  </CustomLink>
                </li>
                <li className="drop-down">
                  <CustomLink to="/contact">
                  <RiCustomerService2Fill/>
                   Customer care
                  </CustomLink>
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
