import React from 'react'

const Sample = (props) => {
    console.log(props.demo);
  return (
    <div>
       <h1>{Object.entries(props.demo)}</h1> 
       <h1>{props.demo.name}</h1>

    </div>
  )
}

export default Sample