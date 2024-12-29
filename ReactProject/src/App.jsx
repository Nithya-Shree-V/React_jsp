import React from 'react'
import './App.css'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Enroll from './Components/Enroll'
import Enquiry from './Components/Enquiry'
import EnrollDetails from './Components/EnrollDetails'
import Editenroll from './Components/Editenroll'

// let router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home></Home>,
//     children:[
//       {
//         path:"/",
//         element:<Nav></Nav>
//       },
//       {
//         path:"/footer",
//         element:<Footer></Footer>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
  {
      path: "/contact",
      element: <Contact />,
  },
  {
      path: "/login",
      element: <Login />,
  },
  {
      path: "/signup",
      element: <Signup />,
  },
  {
    path:"/enroll",
    element:<Enroll></Enroll>
  },{
    path:"/enquiry",
    element:<Enquiry></Enquiry>
  },{
    path:"/details",
    element:<EnrollDetails></EnrollDetails>
  },
  {
    path:"/edit/:id",
    element:<Editenroll></Editenroll>
  }
]);


const App = () => {
  return (
    <div>
        {/* <Home></Home> */}
        <RouterProvider router={router} />
    </div>
  )
}

export default App


