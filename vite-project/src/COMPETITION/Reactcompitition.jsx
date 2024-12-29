import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const Reactcompition = () => {
    let [state,setstate]=useState("");

    let colorref=useRef()

    let handlechange=(e)=>{
        setstate(e.target.value)
    }

    let handleRef=()=>{
        colorref.current.style.color=state;
    }

  return (
    <div>
        <div id='div'>
            <h1 ref={colorref}>state management using useState()</h1>
            <input type="text" name="color"  id="" onChange={handlechange} />
            <button onClick={handleRef}>submit</button>
        </div>
    </div>
  )
}

export default Reactcompition