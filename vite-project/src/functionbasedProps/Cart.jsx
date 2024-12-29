import React, { Fragment } from 'react'

const Cart = (props) => {
    console.log(props.data1);
  return (
    <div>
        {
            props.data1.map((a)=>{
                return <Fragment key={a.id}>
                    <h1>{a.login}</h1>
                </Fragment>

            })
        }

        {
            props.data1.map((x,y)=>{
                console.log(x);
                console.log(y);

                return <Fragment key={y}>
                    <img src={x.avatar_url} alt="" height="200px" width="200px" /> 
                    {/* requires internet */}
                </Fragment>
            })
        }
    </div>
  )
}

export default Cart