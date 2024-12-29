import React, { Component, createRef } from 'react'
import video from "C:\\Users\\Administrator\\Desktop\\React_JSP\\vite-project\\src\\refs\\song.mp4"

export default class Videoplay extends Component {
    constructor() {
        super()
        this.state = {
            play: true //f
        }
        this.playref = createRef()
    }
    handlePlay = () => {
        this.setState({ play:!this.state.play}) 
        // this.setState({ play: this.state.play == false}) 
        // setState: Updates the play state to the opposite of its current value.
        if (this.state.play == true)
            this.playref.current.play();
        else
            this.playref.current.pause();
    }

    render() {
        return (
            <div>
                <video src={video} ref={this.playref} controls muted></video> <br />
                <button onClick={this.handlePlay}>{this.state.play ? "PLAY" : "PAUSE"}</button>
            </div>
        )
    }
}
