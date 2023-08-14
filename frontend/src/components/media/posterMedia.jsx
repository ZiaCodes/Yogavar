import React from 'react'
import YogaPoster from '../../assets/yoga-video-poster.mp4';
const PosterMedia = () => {
  return (

        <video 
          className='yogaVideo2 yogaPoster' 
          autoPlay
          loop
          muted 
          src={YogaPoster}
        />
  )
}

export default PosterMedia
