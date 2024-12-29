import React, { Component } from 'react'

export default class DIDupdate extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    handleChange=()=>{
        this.setState({count:this.state.count+1})
    }

    componentDidUpdate(){
        document.title=(`didUpdate()  ${this.state.count}`)
        alert("this is didUpdate() it execute n no. of times")
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleChange}>Increment</button>
      </div>
    )
  }
}
