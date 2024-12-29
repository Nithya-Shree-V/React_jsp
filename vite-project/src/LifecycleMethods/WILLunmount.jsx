import React, { Component } from 'react'

export default class WILLunmount extends Component {
    constructor(){
        super()

        this.state={
            delete:false
        }
    }

    handleDelete=()=>{
        this.setState({delete:true})
    }
  render() {
    return (
      <div>
        <h1>USERNAME</h1>
        <button onClick={this.handleDelete}>DELETE</button>
        {this.state.delete ? null : <Data></Data>}  
        {/* condition ? truevalue :falsevalue */}
      </div>
    )
  }
}

class Data extends Component{
    componentWillUnmount(){
        alert("do u want to delete this?")
    }
    render(){
        return(
            <h1>username : nithya</h1>
        )
    }
}
