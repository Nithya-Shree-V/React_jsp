import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Parentlayout = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/pages/1">page 1</Link>  
        <br />
        <Link to="/pages/2">page 2</Link>
        <br />
        <Link to="/pages/3">page 3</Link>
        <br />
        <Link to="/pages/4">page 4</Link>
        <br />
        <Outlet></Outlet>
    </div>
  )
}

export default Parentlayout



// ============APP.JSX=========================
// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Parentlayout from './Params/Parentlayout'
// import Pages from './Params/Pages'

// let router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Parentlayout></Parentlayout>,
//     children:[
//       {
//         path:"/pages/:id",
//         element:<Pages></Pages>
//       }
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


