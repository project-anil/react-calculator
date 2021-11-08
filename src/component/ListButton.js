import React, { Component } from 'react'

class ListButton extends Component {
    render() {
        return (
            <div>
                <button>{this.props.buttonName}</button>
            </div>
        )
    }
}

export default ListButton
