import React, { useEffect, useState } from 'react'
import PrintDetails from './PrintDetails'
import axios from 'axios'
import { FadeLoader } from 'react-spinners'

const Details = () => {
    let [state,setState]=useState(null)

    let handleDetails=async()=>{
        let {data}=await axios.get("http://localhost:5001/users")
        setState(data)
    }

    useEffect(()=>{
        handleDetails()
    })


  return (
    <div>
        <h1>Details</h1>
       {
        state ==null ?  (<FadeLoader />) : (state.map((data)=>{ return <PrintDetails key={data.id} {...data}></PrintDetails>}))
       }
    </div>
  )
}

export default Details