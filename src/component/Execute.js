import React, { Component } from 'react'
import BulbOn from '../images/pic_bulbon.gif'
import BulbOff from '../images/pic_bulboff.gif'

class Execute extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bulb: BulbOff
        }
    }
    imageChange = () => {
        if (this.state.bulb === BulbOff)
            this.setState({
                bulb: BulbOn
            })
        else {
            this.setState({
                bulb: BulbOff,

            })
        }
    }

    render() {
        return (
            <div >
                <div >
                    <img src={this.state.bulb} onClick={this.imageChange} alt=" " />
                </div>
            </div>
        )
    }
}

export default Execute
