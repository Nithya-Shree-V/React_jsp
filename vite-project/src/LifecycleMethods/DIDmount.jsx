import React, { Component } from 'react'

export default class DIDmount extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    componentDidMount(){
        document.title=`didMount() ${this.state.count}`
        alert("this is did mount life cycle and it only execute once")
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
