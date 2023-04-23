import React from 'react'
import {MdError} from 'react-icons/md'

const NotFound = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',height:'100vh',gap:'10px'}}>
      <MdError/>
      <h4>Page Not Found</h4>
    </div>
  )
}

export default NotFound