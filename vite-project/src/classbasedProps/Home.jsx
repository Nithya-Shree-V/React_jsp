import React, { Component } from 'react'

export default class Home extends Component {
  render(props) {
    console.log(this.props);
    return (
      <div>
        {this.props.data1}
      </div>
    )
  }
}
