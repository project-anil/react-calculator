import React, { Component } from 'react'

class Example extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello Bangalore",
            color: 'Black'
        }
    }

    setColorButto1 = () => {
        this.setState({ color: 'pink' })
    }
    setColorButto2 = () => {
        this.setState({ color: 'brown' })
    }
    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>{this.state.message}</h1>
                <button onClick={() => this.setColorButto1()}>color1</button>
                <button onClick={() => this.setColorButto2()}>color2</button>
            </div>
        )
    }
}

export default Example
