import React from 'react'
import Parent from './Parent'

const Child3 = (props) => {
  console.log(props.array);

  return (
    <div>
      <h1>{props.array}</h1>
    </div>
  )
}

export default Parent(Child3)