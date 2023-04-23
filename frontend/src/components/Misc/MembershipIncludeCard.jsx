import React from 'react'

const MembershipIncludeCard = (props) => {
  return (
    <div style={{width:'100px',height:'80px'}} className="card-holder">
              <div className="title-card">
                <h1>{props.count}</h1>
                <p>{props.title}</p>
              </div>
        </div>
  )
}

export default MembershipIncludeCard