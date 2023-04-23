
import { GiHamburgerMenu } from "react-icons/gi";
import {MdLightMode} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import Logo from '../../../assets/logo.png'
import CustomLink from "../CustomLink";
import { useTheme } from '../../../hooks';


const Nav = () => {
  const {toggleTheme} = useTheme();

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <CustomLink to="/">
          <img src={Logo} width='30px' alt="logo" />
          <span className="logo-text">YOGAVAR</span>
          </CustomLink>
        </div>

        <div className="nav-btn">
          <ul>
            <li onClick={ toggleTheme } >
              <MdLightMode/>
            </li>
            <li>
              <CustomLink>
                <GiHamburgerMenu className="profile-menu"/>
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
