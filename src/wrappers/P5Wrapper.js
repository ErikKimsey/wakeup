import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "../wrappers/wrapper.scss";
import p5 from 'p5';

 
class P5Wrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            parentW:window.innerWidth,
            parentH: '',
        };
        this.updateCanvasDimensions = this.updateCanvasDimensions.bind(this);
    }

    componentDidMount(){        
        this.canvas = new p5(this.props.sketch, this.el);
        // window.addEventListener("resize", this.updateCanvasDimensions);
    }

    componentWillReceiveProps() {
   
    }

    updateCanvasDimensions(){
        this.setState({ parentW: window.innerWidth })
    }

    render() {
        return <div className="sketch" ref={(el)=>{this.el = el}}></div>;
    }
    
}

export default P5Wrapper;

/**
 * This is the p5 instance constructor.
 *
 * A p5 instance holds all the properties and methods related to
 * a p5 sketch.  It expects an incoming sketch closure and it can also
 * take an optional node parameter for attaching the generated p5 canvas
 * to a node.  The sketch closure takes the newly created p5 instance as
 * its sole argument and may optionally set preload(), setup(), and/or
 * draw() properties on it for running a sketch.
 *
 * A p5 sketch can run in "global" or "instance" mode:
 * "global"   - all properties and methods are attached to the window
 * "instance" - all properties and methods are bound to this p5 object
 *
 * @class p5
 * @constructor
 * @param  {function}    sketch a closure that can set optional preload(),
 *                              setup(), and/or draw() properties on the
 *                              given p5 instance
 * @param  {HTMLElement|Boolean} [node] element to attach canvas to, if a
 *                                      boolean is passed in use it as sync
 * @param  {Boolean}     [sync] start synchronously (optional)
 * @return {p5}                 a p5 instance
 */
// var p5 = function (sketch, node, sync) {
    //     if (typeof node === 'boolean' && typeof sync === 'undefined') {
    //         sync = node;
    //         node = undefined;
//     }