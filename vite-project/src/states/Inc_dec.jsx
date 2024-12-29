//                   shd be there in APP.JSX
import React, { Component } from 'react'

export default class Inc_dec extends Component {
    constructor(){
        super()

        this.state={
            count:0
        }
    }

    bgColor=()=>{
      if(this.state.count==0){
        document.body.style.backgroundColor="red"
      }else if(this.state.count==4){
        document.body.style.backgroundColor="blue"
      }else if(this.state.count==9){
         document.body.style.backgroundColor="plum"
      }
    }

    changeInc=()=>{

        this.setState({count:this.state.count+1})
        this.bgColor()
    }
    changeDec=()=>{

        this.setState({count:this.state.count-1})
        this.bgColor()
    }



  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.changeInc}>Increment</button> 
        <span>&nbsp;</span>
        <button onClick={this.changeDec}>Decrement</button>
      </div>
    )
  }
}
