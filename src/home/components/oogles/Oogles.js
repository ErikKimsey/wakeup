import React, { Component } from "react";
import ReactDOM from "react-dom";
import Style from "../oogles/oogles.scss";
import * as d3 from "d3";
import graph from "../oogles/graph.js";

class Oogles extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        console.log(d3);
        
    }

    componentDidMount() {
        console.log("oogles");

    }
    render() {
        return (
            <div className="oogle"><h1>Oogles</h1></div>
        )
    }
}

export default Oogles;