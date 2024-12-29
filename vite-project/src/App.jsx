// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Mainpage from './Axios/Mainpage'
// import Details from './AXIOS/Details'
// import Signup from './AXIOS/Signup'

// let router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Mainpage></Mainpage>,
//     children:[
//       {
//         path:"/signup",
//         element:<Signup></Signup>
//       },
//       {
//         path:"/details",
//         element:<Details></Details>
//       },
      
//     ]
//   }
// ])
// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
      
//     </div>
//   )
// }

// export default App

import React from 'react'
import ContextEasy from './ContextAPI/ContextEasy'
import Api from './COMPETITION/Api'
import "./App.css"
import Reactcompition from './COMPETITION/Reactcompitition'





const App = () => {
  return (
    <div>

      <Reactcompition></Reactcompition>
   
    </div>
  )
}

export default App