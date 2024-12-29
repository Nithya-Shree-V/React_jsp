import React from 'react'
import Player from './Player'
import VideoItems from './VideoItems'

const Videocontainer = ({state,play,runVideo}) => {
    // console.log(state);
    // console.log(play);
  return (
   
        <div>
            <section>
                <Player videosrc={play}></Player>
            </section>

            <section>
                {state.map((data)=>(
                     <VideoItems data={data} key={data.id} runVideo={runVideo}></VideoItems>
                ))}
            </section>
        </div>
   
  )
}

export default Videocontainer

//                              APP.JSX

// import React, { useState } from 'react'
// import VIDEO from './video.json'
// import Videocontainer from './Youtubepage/Videocontainer'

// const App = () => {
//   let [state,setstate]=useState(VIDEO);
//   let [play,setplay]=useState(state[0]);

//   let runVideo=(VIDEO)=>{
//     setplay(VIDEO.videoUrl)
//   }
//   return (
//     <div>
//       <Videocontainer state={state} play={play} runVideo={runVideo}></Videocontainer>
//     </div>
//   )
// }

// export default App