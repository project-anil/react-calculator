import React, { Component } from 'react'
import ListButton from './ListButton'

class Listrender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: ['Bharath', 'Anil', 'sarika', 'sharth']
        }
    }

    render() {
        return (
            <div>
                {this.state.list.map((name, index) =>
                    <ListButton key={index} buttonName={name} />
                )}
            </div>
        )
    }
}

export default Listrender
