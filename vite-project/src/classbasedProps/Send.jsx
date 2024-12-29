import React, { Component, Fragment } from 'react'

export default class Send extends Component {
    render(props) {
        console.log(this.props.data2);
        return (
            <div>
                {this.props.data2}
            </div>
        )
    }
}
