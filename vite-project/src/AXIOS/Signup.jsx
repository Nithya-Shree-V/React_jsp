import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

  let [state,setState]=useState({
    name:"",
    place:"",
  })

  let {name,place}=state

  let navigate=useNavigate()

  let handleChange=(e)=>{
    let {name,value}=e.target
    setState({...state,[name]:value})
  }

  let handleSubmit=async(e)=>{
    e.preventDefault()

    try{
      let payload={name,place}
      let {data}= await axios.post("http://localhost:5001/users",payload)
      console.log(data);
      navigate("/details")
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div>

      <form action="" onSubmit={handleSubmit}>
        <br />
        <input type="text" name="name" value={name} id="" onChange={handleChange} placeholder='enter your name' /> <br />
        <input type="text" name="place" value={place} id="" onChange={handleChange} placeholder='enter your place'/>
        <br />
        <input type="submit" value="submit" />
      </form>
       
    </div>
  )
}

export default Signup