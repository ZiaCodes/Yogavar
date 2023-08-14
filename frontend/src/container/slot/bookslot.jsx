import React from 'react'
import heroImage from '../../assets/logo.svg'
import Heading from '../../components/Misc/Form/Heading'
import InputField from '../../components/Misc/Form/InputField'
import SubmitBtn from '../../components/Misc/Form/SubmitBtn'
const BookSlot = () => {
  return (
    <div>
      <div className="heroImage">
      <img src={heroImage} alt="register" />
    </div>
    <form className="container">
    <Heading>
        <h3 style={{color:'#fff'}}>Book Your Slot</h3>
    </Heading>

    <InputField 
        name="name"
        type="text"
        placeholder='John Doe'
    />
    <InputField 
        name="email"
        type="email"
        placeholder='john@gmail.com'
    />
    <InputField 
        name="phoneNumber"
        type="number"
        placeholder='+91 90000000'
    />
    <InputField 
        name="date"
        type="date"
        placeholder='Date'
        
    />
    <InputField 
        name="time"
        type="time"
        placeholder='time'
    />

    <SubmitBtn value="Book"/>
    </form>
    </div>
  )
}

export default BookSlot
