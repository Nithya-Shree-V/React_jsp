import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
        <Link to="/"><button>HOME PAGE</button></Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to="/login"><button>LOGIN PAGE</button></Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to="/details"><button>DETAILS</button></Link>

        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MainPage