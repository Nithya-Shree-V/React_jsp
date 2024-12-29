import React, { Component } from 'react'
import Nav1a from './Nav1a'
import Nav1b from './Nav1b'


export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav id="nav">

           <Nav1a></Nav1a>

           <Nav1b></Nav1b>

        </nav>
      </div>
    )
  }
}
