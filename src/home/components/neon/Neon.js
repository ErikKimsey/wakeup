import React, { Component } from "react";
import ReactDOM from "react-dom";
import Style from "../neon/neon.scss";

class Neon extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        console.log("neon");

    }
    render() {
        return (
            <div className="neon"><h1>Neon</h1></div>
        )
    }
}

export default Neon;