import {FaUserCircle} from 'react-icons/fa';
import {MdDangerous} from 'react-icons/md'
import { GiHamburgerMenu } from "react-icons/gi";
import {MdLightMode} from 'react-icons/md';
import Logo from '../../../assets/logo.png'
import CustomLink from "../CustomLink";
import {useAuth, useTheme } from '../../../hooks';


const Nav = () => {
  const {toggleTheme} = useTheme();
  const {authInfo, handleLogout} = useAuth()
  const {isLoggedIn} = authInfo;

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <CustomLink>
            <GiHamburgerMenu className="profile-menu"/>
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
            {
              isLoggedIn ? (
                <CustomLink to="#">
                  <MdDangerous 
                  onClick={handleLogout}
                  className="profile-menu"
                  />
                </CustomLink>
              ) : (
                <CustomLink to="/auth/signin">
                  <FaUserCircle className="profile-menu"/>
                </CustomLink>
              )
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
