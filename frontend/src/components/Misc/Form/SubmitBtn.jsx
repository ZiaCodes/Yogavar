import React from 'react'
import {ImSpinner3} from 'react-icons/im'

const SubmitBtn = ({value, busy}) => {
  return (
    <button 
    type="submit" 
    className='submit-btn'>
      {busy ? <ImSpinner3 className='animate-spin'/> : value}
    </button>
  )
}

export default SubmitBtn