import React, { Component } from 'react'

export default class Cart extends Component {
  render(props) {
    console.log(this.props);
    return (
      <div>
        <h1>hi this is cart </h1>
        {this.props.age}
      </div>
    )
  }
}
