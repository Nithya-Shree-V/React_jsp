import React, { useEffect, useRef, useState } from 'react'

const Containeruseeffect = () => {
    let [state,setState]=useState(0)

    let handleChange=()=>{
        setState(state+1)

       
    }
// no dependency it will mounting and updating 
    // useEffect(()=>{
    //     if(state<10){
    //         document.body.style.backgroundColor="plum"
    //     }else{
    //         document.body.style.backgroundColor="grey"
    //     }
    // }) 


// initially it will mount, based on the dependency the updation happens
    useEffect(()=>{
        document.title=`${state}`
        alert(`working ${state}`)
    },[state>10]) //this updation happens only once that is when the condition is met


    let h1ref=useRef()
    useEffect(()=>{
        document.title=`${state}`
        if(state==0){
        h1ref.current.style.backgroundColor="yellow"
        }else{
        h1ref.current.style.backgroundColor="pink"
        }
    },[]) //there is no dependency so no updation happens only mounting will happen

  return (
    <div>
        <h1 ref={h1ref}>{state}</h1>
        <button onClick={handleChange}>click</button>
    </div>
  )
}

export default Containeruseeffect