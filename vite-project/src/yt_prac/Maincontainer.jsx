import React from 'react'
import Play from './Play';
import Playlist from './Playlist';

const Maincontainer = ({ state, play, runVideo }) => {
    // console.log(state);
    return (
        <div id='maincontainer'>
            <section id='video'>
                <Play videosrc={play}></Play>
            </section>

            <section id='videolist'>
                {state.map((data) => (
                    <Playlist key={data.id} data={data} runVideo={runVideo}></Playlist>
                ))}
            </section>
        </div>
    )
}

export default Maincontainer