import React from 'react'

const Playlist = ({data,runVideo}) => {
    // console.log(data);
    let {thumbnailUrl , title} =data;
  return (
    <div id='videoitem' onClick={()=>{runVideo(data)}}>
        <figure>
            <img src={thumbnailUrl} alt="" width="100px" height="100px" />
        </figure>
        <div>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Playlist