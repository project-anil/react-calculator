import React, { Component } from 'react'
import '../component/Final.css'

class Final extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news: "Times of India"
        }
    }
    buttonClick = () => {
        this.setState({
            news: "Deccan Herald"
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.news}</h1>
                    <button onClick={this.buttonClick}>Click me</button>
                </div>
            </div>
        )
    }
}

export default Final
