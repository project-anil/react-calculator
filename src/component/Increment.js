import React, { Component } from 'react'

class increment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'There are 4 buttons'
        }
    }
    Buttonchange1 = (buttonNum) => {
        this.setState({
            message: `Button ${buttonNum} clicked`
        })
    }

    render() {
        return (
            <div className="app">
                <h1>{this.state.message}</h1>
                <button onClick={() => this.Buttonchange1(1)}>Button1</button>
                <button onClick={() => this.Buttonchange1(2)}>Button2</button>
                <button onClick={() => this.Buttonchange1(3)}>Button3</button>
                <button onClick={() => this.Buttonchange1(4)}>Button4</button>


            </div >
        )
    }
}

export default increment
