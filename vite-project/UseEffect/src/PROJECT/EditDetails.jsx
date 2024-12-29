import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditDetails = () => {
    let [state,setState]=useState({
      name:"",
      subject:""
    })

    let {name,subject}=state

    let navigate=useNavigate()
    let details=useNavigate()

    let {id}=useParams()

    let handleChange=(e)=>{
      let {name,value}=e.target
      setState({...state,[name]:value})
    }

    useEffect(()=>{
      let fetchDetails=async()=>{
        let {data}= await axios.get(`http://localhost:5000/users/${id}`)
        console.log(data);
      }
      fetchDetails()
    },[id])

    let handleSubmit=async(e)=>{
      e.preventDefault()

      try{
      let payload={name,subject}
      let {data}=await axios.put(`http://localhost:5000/users/${id}`,payload)
      console.log(data);
      navigate("/login")
      details("/details")
      }catch(err){
        console.log(err);
      }

    }


  return (
    <div>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">NAME: </label>
            <input type="text" name="name" value={name} id="" onChange={handleChange} />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <label htmlFor="">SUBJECT: </label>
            <input type="text" name="subject" id="" value={subject} onChange={handleChange} />

            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default EditDetails