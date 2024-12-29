import React, { useContext, useRef, useState } from 'react'
import { theme, themeContext } from './ThemeContext'

const Container = () => {
    let {dark,light}=useContext(themeContext)

    let [toggle,settoggle]=useState(false)

    let bgref=useRef()

    let handleChange=()=>{
        settoggle(!toggle)

        if(toggle == true){
          bgref.current.style.backgroundColor=dark.backgroundColor
        }else{
          bgref.current.style.backgroundColor=light.backgroundColor
        }
    }
  return (
    <div>
        <nav id="nav" ref={bgref}></nav>

        <button onClick={handleChange}>{toggle ? "DARK" : "LIGHT"}</button>

    </div>
  )
}

export default Container