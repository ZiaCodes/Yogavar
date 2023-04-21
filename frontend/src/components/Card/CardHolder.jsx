import React from 'react'
import data from '../../utils/media'
import Card from './Card'
const CardHolder = () => {
  return (
    <div className="resources-card">
        {
            data.map((val)=>{
                return(
                    <Card 
                    key={val.id}
                    yogaPoster={val.yogaPoster}
                    title={val.title}
                    />
                )
            })
        }
    </div>
  )
}

export default CardHolder