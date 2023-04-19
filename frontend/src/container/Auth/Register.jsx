import { FaUserCircle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import {FaMobile} from 'react-icons/fa'
import heroImage from '../../assets/img/vertical.png'
import Footer from "../../components/Footer/Footer";
import CustomLink from '../../components/CustomLink'

const FieldStyle = {
    color: "crimson",
    fontSize: "20px",
    padding: "5px",
    fontWeight: "bolder"
  };

const Register = () => {
  return (
    <>
    <div className="container">
      <div className="heroImage">
          <img src={heroImage} alt="register" />
        </div>

        <div className="FormCard register-form">
          <div className="title">
            <AiOutlineLogin style={{ transform: "rotate(180deg)" }} />{" "}
            <p>Register</p>
          </div>
          <div className="inputField">
            <FaUserCircle style={FieldStyle} />
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="inputField">
            <MdAlternateEmail style={FieldStyle} />
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="inputField">
            <FaMobile style={FieldStyle} />
            <input type="text" name="number" placeholder="Mobile Number" />
          </div>
          <div className="inputField">
            <AiFillLock style={FieldStyle} />
            <input type="password" name="password" placeholder="*********" />
          </div>
          <div className="inputField">
            <AiFillLock style={FieldStyle} />
            <input type="password" name="password" placeholder="*********" />
          </div>
          <div className="useful-links">
            <CustomLink to="/login">
            Already have?LogIn
            </CustomLink>
          </div>
          <div className="btn">
            <button className="register" type="submit">
              Register
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </>

  )
}

export default Register