import React from 'react'
import {IoLogoFacebook} from 'react-icons/io'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
        <div>
          <p>Design  with <AiFillHeart style={{color:'red',position:'relative',top:'3px'}}/> by <a style={{color:'white',textDecoration:'none'}} href="https://github.com/ziacodes" >ziacodes</a></p>
        </div>
      <ul>
            <li>
              <IoLogoFacebook/>
            </li>
            <li>
            <AiOutlineInstagram/>
            </li>
            <li>
            <AiFillTwitterCircle/>
            </li>
          </ul>
      </div>
  )
}

export default Footer