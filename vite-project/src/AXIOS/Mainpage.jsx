import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div>
        <Link to="/">Home</Link> 
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to="/signup">Signup</Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

        <div><Outlet></Outlet></div>
    </div>
  )
}

export default Mainpage