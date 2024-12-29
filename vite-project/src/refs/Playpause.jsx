import React, { useState } from 'react'
import video from "./refs/Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez) [Official Video].mp4"
import { useRef } from 'react'

const Playpause = () => {
  let [state, setState] = useState(true)
  let vidRef = useRef()

  let playPause = () => {
    setState(!state)

    if (state == true) {
      vidRef.current.play() //inbuilt method play and pause
    } else {
      vidRef.current.pause()
    }
  }


  return (
    <div>
      <video src={video} controls width="300px" height="300px" ref={vidRef}></video>
      <button onClick={playPause}>{state ? "PLAY" : "PAUSE"}</button>
    </div>
  )
}

export default Playpause