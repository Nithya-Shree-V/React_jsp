import React from 'react'

const Play = ({videosrc}) => {
  return (
    <div>
        <video src={videosrc} controls autoPlay width="750px" height="500px"></video>
    </div>
  )
}

export default Play