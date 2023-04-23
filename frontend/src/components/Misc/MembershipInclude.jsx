import React from 'react'
import membershipData from '../../utils/resources';
import MembershipIncludeCard from './MembershipIncludeCard';

const MembershipInclude = () => {
  return (
    <div className="resources-card ">
        {
            membershipData.map((value)=>{
                return(
                    <MembershipIncludeCard
                    key={value.id}
                    count={value.Count}
                    title={value.title}
                    />
                )
            })
        }
    </div>
  )
}

export default MembershipInclude