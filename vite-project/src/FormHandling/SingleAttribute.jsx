import React, { useState } from 'react'

const SingleAttribute = () => {
  let [state,setstate]=useState("")

  let handleChange=(e)=>{
    console.log(e.target);
    setstate(e.target.value)
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(state);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">NAME: </label>
        <input type="text" name="" onChange={handleChange} />
        <button>submit</button>
      </form>
      <h1>{state}</h1>
    </div>
  )
}

export default SingleAttribute
