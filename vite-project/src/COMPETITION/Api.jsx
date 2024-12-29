import React, { Fragment, useState } from 'react'
import jsondata from "./jsondata.json"

const Api = () => {
    let [state,setstate]=useState(jsondata)

   
  return (
    <div>

        <div>{state.map((data)=>{
            return <Fragment>
                <ul>
                <li>{data.id}</li>
                <li>{data.name}</li>
                </ul>
            </Fragment>
            
        })}</div>

    </div>
  )
}

export default Api