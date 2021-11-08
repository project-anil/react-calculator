import React, { Component } from 'react'

class counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0

        }
        console.log("anil")
    }


    increament() {
        this.setState({
            count: this.state.count + 1
        })

    }
    componentDidMount() {
        console.log("mount")
    }
    componentDidUpdate() {
        console.log("update")
    }
    componentWillUnmount() {
        console.log("unmount")
    }
    render() {
        console.log("render")
        return (
            <div>
                <div>count-{this.state.count}</div>
                <button onClick={() => this.increament()}>Increament</button>

            </div >
        )
    }
}

export default counter
