import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners';
import PrintEnroll from './PrintEnroll';

const EnrollDetails = () => {
    let [state,setState]=useState(null)

    let handleDetails= async()=>{

        try{
            
            let {data}=await axios.get("http://localhost:3000/enroll");
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
         

{
    state == null ? (<FadeLoader />) : (state.map((data)=>{return <PrintEnroll key={data.id} {...data}/>}))
}
    </div>
  )
}

export default EnrollDetails