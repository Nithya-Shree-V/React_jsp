import React, { Fragment } from 'react'

const Jsonsend = (props) => {
    console.log(props.data);
  return (
    <div>
      
    {
      
      props.data.map((x)=>{
            return <Fragment key={x.id}>
                
                <img src={x.avatar_url} alt="" />


            </Fragment>
      })
    }
    </div>
  )
}

export default Jsonsend