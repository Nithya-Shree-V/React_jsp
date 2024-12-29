import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
                <aside>
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="/logo">logo</Link>
                    <br />
                    <Link to="/login">login</Link>
                    <br />
                    <Link to="/cart">cart</Link>
                </aside>
                <aside>
                    <Outlet></Outlet>
                </aside>
        </div>
    )
}

export default Home

// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './Routers/Home'
// import Nav from './Routers/Nav'
// import Logo from './Routers/Logo'
// import Cart from './Routers/Cart'
// import Login from './Routers/Login'

// let router=createBrowserRouter([{
//   path:"/",
//   element:<Home></Home>,
//   children:[
//     {
//       path:"/",
//       element:<Nav></Nav>,
//       children:[
//         {
//           path:"/logo",
//           element:<Logo></Logo>
//         },
//         {
//           path:"/cart",
//           element:<Cart></Cart>
//         },
//         {
//           path:"/login",
//           element:<Login></Login>
//         }
//       ]
//     },
// ]
// }])
// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App