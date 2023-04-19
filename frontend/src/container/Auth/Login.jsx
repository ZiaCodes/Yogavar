import { FaUserCircle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";

import heroImage from '../../assets/img/vertical.png'
import Footer from "../../components/Footer/Footer";
import CustomLink from "../../components/CustomLink";

const FieldStyle = {
  color: "crimson",
  fontSize: "20px",
  padding: "5px",
  fontWeight: "bolder"
};

const Login = () => {
  return (
    <>
    <div className="container">
      <div className="FormCard">
          <div className="title">
            <AiOutlineLogin /> <p>LogIn</p>
          </div>
          <div className="inputField">
            <FaUserCircle style={FieldStyle} />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="inputField">
            <AiFillLock style={FieldStyle} />
            <input type="password" name="password" placeholder="*********" />
          </div>
          <div className="useful-links">
            <CustomLink to='/register'>
              Don't have?Register
            </CustomLink>
          </div>
          <div className="btn">
            <button className="login" type="submit">
              Login
            </button>
          </div>
        </div>

        <div className="heroImage">
          <img src={heroImage} alt="register" />
        </div>

      </div>

      <Footer/>
    </>
        
  )
}

export default Login