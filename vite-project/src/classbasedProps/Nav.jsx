import React, { Component } from 'react'

export default class Nav extends Component {
  render(props) {
    console.log(this.props.prop1);
    return (
      <div>
        <h1>{this.props.prop1}</h1>
        
      </div>
    )
  }
}


//----------------------------------App.jsx--------------------------------
// import React, { Component } from 'react'
// import Nav from './classbasedProps/Nav';
// import Home from './classbasedProps/Home';
// import Cart from './classbasedProps/Cart';
// import json from './jsonAPI.json'
// import Json from './classbasedProps/Json';
// import Send from './classbasedProps/Send';


// export default class App extends Component {
//   constructor(){
//     super()

//     this.name="Nithya"
//     this.age=22;
//   }
//   render() {
//     return (
//       <div>
//         <Nav prop1={this.name}></Nav>
//         <Home data1={<Cart age={this.age}></Cart>}></Home>
//         <Send data2={<Json json1={json}></Json>}></Send>
//       </div>
//     )
//   }
// }

