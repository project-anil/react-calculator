import React, { Component } from 'react'
import './Final.css'
import Clearall from './Button'

class RealOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0,
            value1: "",
            value2: 0,
            mathop: '+'

        }

        console.log("costructor called")
    }
    numDisplay = (enterNum) => {

        this.setState({
            value1: this.state.value1.concat(enterNum)
        })

    }
    equalTotal = () => {
        try {
            this.setState({
                value1: eval(this.state.value1).toString()
            })

        }
        catch {
            this.setState({
                value1: "Error"
            })
        }

    }
    spaceNum = () => {
        this.setState({
            value1: this.state.value1.slice(0, -1)
        })
    }
    clearNum = () => {
        this.setState({
            value1: ""
        })

    }

    componentDidMount() {
        console.log("Anil")
    }


    render() {
        console.log("render called")
        return (
            <div className="calculator">
                <input value={this.state.value1} />
                <div>
                    <button className="calc-button" onClick={() => this.numDisplay(1)}>1</button>
                    <button className="calc-button" onClick={() => this.numDisplay(2)}>2</button>
                    <button className="calc-button" onClick={() => this.numDisplay(3)}>3</button>
                    <button className="calc-button" onClick={() => this.numDisplay(4)}>4</button>
                    <button className="calc-button" onClick={() => this.numDisplay(5)}>5</button>
                    <button className="calc-button" onClick={() => this.numDisplay(6)}>6</button>
                    <button className="calc-button" onClick={() => this.numDisplay(7)}>7</button>
                    <button className="calc-button" onClick={() => this.numDisplay(8)}>8</button>
                    <button className="calc-button" onClick={() => this.numDisplay(9)}>9</button>
                    <button className="calc-button" onClick={() => this.numDisplay(0)}>0</button>
                    <button className="calc-button" onClick={() => this.numDisplay("+")}>+</button>
                    <button className="calc-button" onClick={() => this.numDisplay("-")}>-</button>
                    <button className="calc-button" onClick={() => this.numDisplay("/")}>/</button>
                    <button className="calc-button" onClick={() => this.numDisplay("*")}>*</button>
                    <button className="calc-button" onClick={() => this.equalTotal()}>=</button>
                    <button className="calc-button" onClick={() => this.spaceNum()}>Backspace</button>
                    <button className="calc-button" onClick={() => this.clearNum()}>Clear</button>
                </div>


            </div >
        )
    }
}

export default RealOne



