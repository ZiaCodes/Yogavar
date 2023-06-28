import { GiHamburgerMenu } from "react-icons/gi";
import {MdLightMode} from 'react-icons/md';
import Logo from '../../../assets/logo.png'
import CustomLink from "../CustomLink";
import { useTheme } from '../../../hooks';
import { useState } from 'react';
import Sidebar from './Sidebar';


const Nav = () => {
  const [open, setOpen] = useState(false);
  const {toggleTheme} = useTheme();


  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <CustomLink>
            <GiHamburgerMenu
            onClick={()=> setOpen(!open)}
            className="profile-menu"/>
          </CustomLink>
        </div>

        <CustomLink to="/">
            <img src={Logo} width='30px' alt="logo" />
            <p style={{color:'#000',fontWeight:'bolder'}}>YOGAVAR</p>
          </CustomLink>

        <div className="nav-btn">
          <ul>
            <CustomLink to="#"  >
              <MdLightMode
                onClick={ toggleTheme }
               className="profile-menu"/>
            </CustomLink>
          </ul>
        </div>
      </div>

      {
        open &&
        <Sidebar/>
      }
    </>
  );
};

export default Nav;
