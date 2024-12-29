import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PrintDetails from './PrintDetails'
import { FadeLoader } from 'react-spinners'

const Details = () => {

    let [state,setState]=useState(null)

    let handleDetails= async()=>{

        try{
            
            let {data}=await axios.get("http://localhost:5000/users");
            setState(data)

        }catch(err){
           console.log(err);
           
        }

    }


    useEffect(()=>{

        handleDetails()

    },[])

  return (
    <div>
        <h1>DETAILS:-</h1>

        {
            state == null ? (<FadeLoader />) : (state.map((data)=>{return <PrintDetails key={data.id} {...data}></PrintDetails>}))
        }
    </div>
  )
}

export default Details