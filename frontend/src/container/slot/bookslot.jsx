import React, { useEffect, useState } from 'react'
import Heading from '../../components/Misc/Form/Heading'
import { getAllMentors, getSingleMentor } from '../../apis/mentor';
import SubmitBtn from '../../components/Misc/Form/SubmitBtn';

const BookSlot = () => {

  const [mentors,setMentors] = useState([]);
  const [selectedMentor , setSelectedMentor] = useState({});

  const getData = async() =>{
    const res = await getAllMentors();
    if(res.error) return console.log(res.error);
    setMentors(res);
  }

  useEffect(()=>{
    getData();
  },[])


  const selectMentor = async(id) =>{
    const res = await getSingleMentor(id);
    if(res.error) return console.log(res.error);
    setSelectedMentor(res);
    console.log(selectedMentor);
  }

  return (
    <>
    <div className="mentor-list-in-slot">

    <Heading>
        <h3 style={{color:'#fff'}}>Select a Mentor</h3>
    </Heading>

    {
        mentors.map((mentor)=>{
          return(
            <div onClick={()=>selectMentor(mentor.id)} key={mentor.id} className='mentor-details-box-slot'>
            <div className="mentor-avatar-slot">
              <img src={mentor.avatar} style={{width:'100%',height:'auto'}} alt="poster" />
            </div>
            <div className="mentor-title-slot">
              <p>
              {mentor.name}
              </p>
            </div>
          </div>
  
          )
        })
    }

  <SubmitBtn  value="Next" />
    </div>
    </>
  )
}

export default BookSlot
