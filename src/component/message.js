import React, { Component, component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'welcome visitor',
            count: 0
        }
    }

    clickButton = () => {
        this.setState({ message: 'Thank you' })
        this.setState({ count: this.state.count + 1 })

    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <h2>
                    Count : {this.state.count}
                </h2>
                <button onClick={this.clickButton}>Click</button>
            </div>

        )
    }
}

export default Message