import React from 'react'

const Card = (props) => {
  return (
    <div className="card-holder">
        <div className="card-poster">
          <img src={props.yogaPoster} alt="poster" />
        </div>
        <div className="title-card">{props.title}</div>
        <div className="try-now">
          <p>learn More... </p>
        </div>
    </div>
  )
}

export default Card