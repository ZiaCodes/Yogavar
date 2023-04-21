import React from 'react'
import {MdOutlineError} from 'react-icons/md'

const DesktopView = () => {
  return (
    <div className='desktop-view'>
      <div>
        <p style={{display:'flex',alignItems:'center'}}>
          <MdOutlineError style={{fontSize:'30px',color:'red'}}/>
          This Application is designed only for smaller Devices such mobiles and smart phones
          </p>
      </div>
    </div>
  )
}

export default DesktopView