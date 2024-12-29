import React, { useRef, useState } from 'react'

const Connection = () => {
    let [state,setstate]=useState("")

    let textref=useRef()
    let pararef=useRef()

    let change=()=>{
        setstate(textref.current.value)
        pararef.current.style.backgroundColor="pink"
    }

  return (
    <div>
        <input type="text" ref={textref}/>
        <button onClick={change}>click</button>
        <h1 ref={pararef}>{state}</h1>
    </div>
  )
}

export default Connection