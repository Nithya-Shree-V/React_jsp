import React from 'react'
import Parent from './Parent'
import Child2 from './Child2';

const Child1 = (props) => {
    console.log(props.data);
  return (
    <div>
        <h1>{Object.keys(props.data)}</h1>
        <h1>{Object.values(props.data)}</h1>
    </div>
  )
}

export default Parent(Child1)