import React, { useContext, useRef, useState } from 'react'
import { PiStudentDuotone } from "react-icons/pi";
import { BsToggleOn } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    let [toggle,settoggle]=useState(true)

    let handleToggle=()=>{
        settoggle(!toggle)

        if(toggle==true){
            document.body.style.backgroundColor= "#FCFAEE";
        }else{
            document.body.style.backgroundColor= "#B7B7B7";
        }
    }

    return (
        <div>
            
            <nav id='nav'>
                <div id='logo'>
                <Link to="/"> <PiStudentDuotone id='logo'/></Link>
                </div>
               
                    <div>
                    <Link to="/"><button>Home</button></Link>
                    </div>
                    <div id='tog'>
                        <button onClick={handleToggle}><BsToggleOn /></button>
                    </div>
                    <div>
                    <Link to="/contact"><button>Contact</button></Link>
                    </div>
                    <div>
                    <Link to="/login"><button>Login</button></Link>
                    </div>
                    <div>
                    <Link to="/signup"><button>Sign up</button></Link>
                    </div>
                
            </nav>
        </div>
    )
}

export default Nav