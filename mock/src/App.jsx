import React, { useRef, useState } from 'react'
import bulb from 'C:\\Users\\Administrator\\Desktop\\React_JSP\\mock\\src\\assets\\file (1).png'

const App = () => {
  let [state,setstate]=useState(bulb)

  let bulbref=useRef()

  let handleOn=()=>{
      bulbref.current.style.backgroundColor="yellow"
  }
  let handleOff=()=>{
    bulbref.current.style.backgroundColor="grey"
  }

  return (
    <div align="center">
      <img ref={bulbref} src={state} alt="" width="300px" height="300px" />
      <br /> <br /> <br />
      <button onClick={handleOn}>On</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button onClick={handleOff}>Off</button>
    </div>
  )
}

export default App