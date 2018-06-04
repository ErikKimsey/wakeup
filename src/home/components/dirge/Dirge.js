import React, { Component } from "react";
import ReactDOM from "react-dom";
import Style from "../dirge/dirge.scss";

class Dirge extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        console.log("dirge");

    }
    render() {
        return (
           <div className="dirge"><h1>DIRGE</h1></div>
        )
    }
}

export default Dirge;