import React, { createContext } from "react";

export let themeContext=createContext()

export let theme={
   dark:{
    backgroundColor:"#040404"
   },
   light:{
    backgroundColor:"#ff0000"
   }
}
// -----------------APP.css
// #nav{
//    height: 100px;
//    border: 2px solid red;
// }


// ----------------App.JSX------------------
// import React from 'react'
// import "./App.css"
// import { themeContext } from './TOGGLE/ThemeContext'
// import Container from './TOGGLE/Container'
// import { theme } from './TOGGLE/ThemeContext'


// const App = () => {
//   let {Provider}=themeContext
//   return (
//     <div>
//       <Provider value={theme}>
//           <Container></Container>
//       </Provider>


//     </div>
//   )
// }

// export default App