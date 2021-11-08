import React, { Component } from 'react'

class Upclass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increament = () => {
        if (this.state.count < 10) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    decreament = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }


    render() {
        return (
            <div>
                <div>
                    count-{this.state.count}
                </div>
                <button onClick={() => this.increament()}>increament</button>
                <button onClick={() => this.decreament()}>decreament</button>
            </div>
        )
    }
}

export default Upclass
