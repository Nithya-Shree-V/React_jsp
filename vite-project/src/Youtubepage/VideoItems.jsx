import React from 'react'

const VideoItems = ({ data, runVideo }) => {
  console.log(data);
  let { thumbnailUrl, title } = data;
  return (
    <div onClick={()=> runVideo(data)}>


      <figure>
        <img src={thumbnailUrl} alt={title} width="100px" height="100px" />
      </figure>
      <div>
        <p>{title}</p>
      </div>


    </div>
  )
}

export default VideoItems