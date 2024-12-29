import React, { Fragment } from 'react'
import { userContext } from './UserContext'

const Login = () => {
  return (
    <div>
        <userContext.Consumer>
            {
                ({place})=>{
                    return <Fragment>
                        <h1>{place}</h1>
                    </Fragment>
                }
            }
        </userContext.Consumer>
    </div>
  )
}

export default Login