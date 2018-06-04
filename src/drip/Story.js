import React, { Component } from "react";
import ReactDOM from "react-dom";
import oddDialog from "./story-narrative.js";
import Style from "./story.scss";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Home } from '../home/Home.js';
import Root from '../root/Root.js';
import CookieMonster from '../utilz/Cookies.js'


class Story extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            oddTreatment: 'OddTreatment',
            arrIndx: 0,
            arrLen: oddDialog.length,
            textData: '',
            shouldRedirect: false,
            skipAmnt:oddDialog.length+5,
            cookie: '',
         };
         this.handleSkip = this.handleSkip.bind(this);
         this.handleCookies = this.handleCookies.bind(this);
    }

    componentDidMount(){
        this.intervalId = setInterval(
            () => {
                this.iterateArray()
            },500
        )
        this.handleCookies();
    }

    componentWillUnmount(){
        // console.log("Unmounting???");
        // this.handleCookies();
        clearInterval(this.intervalId);
        // console.log(this.state.cookie instanceof CookieMonster);
        // console.log("cookie now is ", this.state.cookie);
        // console.log("being passed to Root: ", this.state.cookie);
        
    }

    iterateArray() {
        if (this.state.arrIndx+1 <= this.state.arrLen-1) {
            // console.log("arr len before incr ", this.state.arrLen-2);
            // console.log("arr indx before incr ",this.state.arrIndx);
            this.setState({
                arrIndx: this.state.arrIndx+=1,
            }); 
            // console.log("arr indx after incr ",this.state.arrIndx);
            this.indexCallback(this.state.arrIndx)
        } else {
            // console.log("else indx ", this.state.arrIndx + 1);
            
            this.indexCallback(this.state.arrIndx+1)
        }
        return;
    }

    // TODO: 
    // (for each iteration, apply the following:)
    // Function: toggle fade out...
    // --On iteration, add class that transitions fade
    // ----Maybe, setTimeout of 500ms before adding fade class
    // 
    // Function: remove fade class...
    // -- 
    indexCallback(indx){
        // console.log("callback index ", indx);
        this.props.updateRenderDrip(indx);
    }

    handleCookies(){
        // let c;
        // console.log(" c is ", c);
        // c = (this.state.cookie instanceof CookieMonster) ? this.state.cookies : new CookieMonster();
        // console.log(" c is ", c);
        // c.initCookie();
        // this.setState({
        //     cookie: c
        // });
    }

    handleSkip(){
        // console.log("handling skip maybe?????");

        this.props.updateRenderDrip(this.state.skipAmnt);
    }

    // TODO 
    // - add logic to add substitutive "OddTreatment" text to .narrative
    // - add svg filter to make "OddTreatment" extra glitchy (https://codepen.io/anon/pen/bvPNYp?editors=1100)
    // - put addOddTreatBwNarrative inyo data-text expression. This will

    render() {
        return (
            <div>
                <div className="narrative narrative-pos" data-text={oddDialog[this.state.arrIndx].d} >
                    <div>{oddDialog[this.state.arrIndx].d}</div>
                </div>
                <div className="skip-intro" onClick={this.handleSkip}>skip</div>
            </div>
        );
    }
}

export default Story;