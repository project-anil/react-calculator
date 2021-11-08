import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0,
            value1: 0,
            value2: 0
        }

    }
    mathCalculation = () => {
        this.setState({ value1: target.value })


    }
    mathCalc = (evt) => {
        this.setState({ value2: evt.target.value })
    }
    mathOperation = (operation) => {
        if (this.state.value1 < 0 || this.state.value < 0) {
            this.setState({ value: "Math operation is not possible" })
        }
        else {
            if (operation == "+")
                this.setState({ value: Number(this.state.value1) + Number(this.state.value2) })
            if (operation == "-")
                this.setState({ value: this.state.value1 - this.state.value2 })
            if (operation == "*")
                this.setState({ value: this.state.value1 * this.state.value2 })
            if (operation == "/") {
                if (this.state.value1 == 0 || this.state.value2 == 0) {
                    this.setState({ value: "Division is not possible" })
                }
                else {
                    this.setState({ value: this.state.value1 / this.state.value2 })
                }
            }
        }
    }
    render() {
        return (
            <div className="grid-align">
                <form>
                    <label>
                        <input type="number"
                            onChange={this.mathCalculation} />

                    </label>
                    <label>
                        <input type="number"
                            onChange={this.mathCalc}
                        />
                    </label>
                </form>
                <div> <button onClick={() => this.mathOperation(1)}>1</button>
                    <button onClick={() => this.mathOperation(2)}>2</button>
                    <button onClick={() => this.mathOperation(3)}>3</button>
                    <button onClick={() => this.mathOperation("+")}>ADD</button>
                    <div>
                        <button onClick={() => this.mathOperation(4)}>4</button>
                        <button onClick={() => this.mathOperation(5)}>5</button>
                        <button onClick={() => this.mathOperation(6)}>6</button>
                        <button onClick={() => this.mathOperation("-")}>SUB</button>
                    </div>
                    <div>
                        <button onClick={() => this.mathOperation(7)}>7</button>
                        <button onClick={() => this.mathOperation(8)}>8</button>
                        <button onClick={() => this.mathOperation(9)}>9</button>
                        <button onClick={() => this.mathOperation("/")}>DIVI</button>
                    </div>
                    <div>
                        <button onClick={() => this.mathOperation(".")}>.</button>
                        <button onClick={() => this.mathOperation(0)}>0</button>
                        <button onClick={() => this.mathOperation("=")}>=</button>
                        <button onClick={() => this.mathOperation("*")}>MUL</button>
                    </div>
                </div>
                <h1>result : {this.state.value}</h1>
            </div>
        )
    }
}

export default Calculator
