import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.clearCal(9)}>1</button>
                <p>{this.props.clearMes}</p>
            </div>
        )
    }
}

export default Button
