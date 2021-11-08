import React, { Component } from 'react'
import punithar from '../images/punith.png'
import puniChild from '../images/childhood.png'
import rajkumar from '../images/drr.png'
import davan from '../images/dvg.png'
import raneben from '../images/rane.png'
import download from '../images/download.png'
import mysore from '../images/mysore.png'



class Trail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            heading: "PunithRajKumar Pics",
            index: 0,
            imageURL: [punithar, puniChild, rajkumar, mysore, download, raneben, davan]

        }
    }



    onClickForward = () => {
        if (this.state.index + 1 === this.state.imageURL.length)
            this.setState({
                index: 0
            })

        else
            this.setState({
                index: this.state.index + 1
            })
    }

    onClickBackward = () => {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imageURL.length - 1
            })
        }
        else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.heading}</h1>
                <img style={{ height: "250px", width: "auto" }} src={this.state.imageURL[this.state.index]} alt=" " />
                <div>
                    <button onClick={() => this.onClickForward()}>Next</button>
                    <button onClick={() => this.onClickBackward()}>Back</button>
                </div>
            </div >
        )
    }
}

export default Trail
