import React, { Component } from 'react'
import download from '../images/download.png'
import mysore from '../images/mysore.png'
import rane from '../images/rane.png'
import dvg from '../images/dvg.png'

class Images extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageURL: download
        }
    }
    imageChange = (imgChange) => {
        this.setState({
            imageURL: imgChange

        })
    }

    render() {
        return (
            <div className="app">

                <img src={this.state.imageURL} onClick={() => this.imageChange(mysore)} alt=" " />
                <img src={this.state.imageURL} onClick={() => this.imageChange(rane)} alt=" " />
                <img src={this.state.imageURL} onClick={() => this.imageChange(dvg)} alt=" " />


            </div>
        )
    }
}

export default Images
