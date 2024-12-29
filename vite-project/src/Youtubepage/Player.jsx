import React from 'react'

const Player = ({videosrc}) => {
  return (
    <div>
      <video src={videosrc} controls autoPlay></video>
    </div>
  )
}

export default Player