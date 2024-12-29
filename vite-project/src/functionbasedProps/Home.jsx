import React from 'react'

const Home = (props) => {
    console.log(props.data);
  return (
    <div>
        {props.data}    
    </div>
  )
}

export default Home


//                  APP.JSX
// import React from 'react'
// import Home from './functionbasedProps/Home'
// import Cart from './functionbasedProps/Cart'
// import json from "./jsonAPI.json"
// import Sample from './functionbasedProps/Sample'

// const App = (props) => {
//   return (
//     <div>
//       <Sample demo={{name:"Nithya",place:"bangalore"}}></Sample>
//       <Home data={<Cart data1={json}></Cart>}></Home>
//     </div>
//   )
// }

// export default App