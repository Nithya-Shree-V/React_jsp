import React from 'react'
import Parent from './Parent'

const Child2 = (props) => {
  return (
    <div>
        <img src={props.data.img} alt="" height="300px" width="600px"/>
        
    </div>
  )
}

export default Parent(Child2)