import React, { Component } from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'

export default class Nav1a extends Component {
  render() {
    return (
        <div>
        <div id="nav1a">
            <Nav1></Nav1>
            <Nav2></Nav2>
        </div>
      </div>
    )
  }
}
