import React, { useRef } from 'react'
import { useState } from 'react'

const Colorchange = () => {
let [state,setstate]=useState("javascript")

    let textref=useRef()

    let change=()=>{
        setstate("react js")
        textref.current.style.color="blue"
        textref.current.style.border="2px solid black"
    }


  return (
    <div>
        <h1 ref={textref}>{state}</h1>
        <button onClick={change}>click</button>
    </div>
  )
}

export default Colorchange