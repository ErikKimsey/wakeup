import React, { Component } from "react";
import ReactDOM from "react-dom";
import P5Wrapper from '../../../wrappers/P5Wrapper.js';
import Rose from '../flowerdoom/sketches/sketch2.js';
import Style from "../flowerdoom/flowerdoom.scss";

class FlowerDoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sketch : Rose,
            fadeInFlower: '',
        };
        this.flowerFadeIn = this.flowerFadeIn.bind(this);
    }

    componentDidMount() {
        window.setInterval(this.flowerFadeIn, 2000);
    }

    flowerFadeIn(){
        this.setState({
            fadeInFlower: 'fadeInFlower'
        });
    }
    
    render() {
        return (
            <div className={'flowerPow sketch-container ' + this.state.fadeInFlower} ref="flowpow">
                <P5Wrapper sketch={this.state.sketch}/>
            </div>
        )
    }
}

export default FlowerDoom;