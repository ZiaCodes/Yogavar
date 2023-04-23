import React from 'react'
import mentorData from '../../utils/resources.json'
import Mentor from '../../components/Misc/Mentor'

const PosterContainer = () => {
  return (
    <div className="hero-poster">
      {
        mentorData.map((value) => {
          return (
            <Mentor
            key={value.id}
            mentorImg={value.mentorImg}
            Mentor_name={value.Mentor_name}
            />
          )
        })
      }
    </div>
  )
}

export default PosterContainer