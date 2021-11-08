import React, { Component } from 'react'
import './Colorchange.css'


export class Colorchange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            abc: 'black',
            rowGap: 25
        }
    }
    changeColor = (colorNum) => {
        this.setState({
            abc: colorNum
        })
    }

    render() {
        return (
            <div className="grid-content">
                <div className="main-div" style={{ backgroundColor: this.state.abc }}></div>
                <div style={{ display: 'grid', gridRowGap: this.state.rowGap }}>
                    <button onClick={() => this.changeColor("red")}>RED</button>
                    <button onClick={() => this.changeColor("pink")}>PINK</button>
                    <button onClick={() => this.changeColor("brown")}>BROWN</button>
                    <button onClick={() => this.changeColor("blue")}>BLUE</button>
                </div>

            </div >
        )
    }
}

export default Colorchange
