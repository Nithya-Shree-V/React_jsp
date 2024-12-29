import React, { Component, Fragment } from 'react'

export default class Json extends Component {
  render(props) {
    return (
      <div>
        {
                this.props.json1.map((x, y) => {
                    console.log(x);
                    return <Fragment key={y}>
                        <h1>{x.login}</h1>
                    </Fragment>
                })
        }
      </div>
    )
  }
}
