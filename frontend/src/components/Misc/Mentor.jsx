import React from 'react'

const Mentor = (props) => {
  return (
    <>
        <div className="card-holder-circle">
            <div className="card-poster-circle">
              <img src={props.mentorImg} alt="poster" />
            </div>
            <div className="title-card-circle">
              {props.Mentor_name}
            </div>
        </div>
    </>
  )
}

export default Mentor