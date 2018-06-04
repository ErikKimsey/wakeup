import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import oddDialog from '../drip/story-narrative.js';
import Story from '../drip/Story.js';
import Home from '../home/Home.js';
import CookieMonster from '../utilz/Cookies.js'
// git rm -r --cached node_modules


class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
          renderDrip: true,
          oddDialogLen: oddDialog.length,
          oddDialogIndex: '',
          cookie: '',

        };
        this.updateRenderDrip = this.updateRenderDrip.bind(this);
        this.isRenderDrip = this.isRenderDrip.bind(this);
        this.updateCookieFromStory = this.updateCookieFromStory.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.cookieStateUpdated = this.cookieStateUpdated.bind(this);
    }

    componentDidMount() {
        console.log(this.state.oddDialogLen);
        // this.updateCookieFromStory();
        this.updateCookieFromStory();
        this.getCookie()
    }

    getCookie(){
        console.log("Root getting cook onmount: ",this.state.cookie);
    }

    updateCookieFromStory(){
        let c='';
        console.log(" c is ", c);
        if (!(this.state.cookie instanceof CookieMonster)){
            console.log("NOT INsTNACE");
            c = new CookieMonster();
            c.initCookie();
            this.setState({cookie: c,}, ()=>{
                this.cookieStateUpdated();
            });
        }
        // c = (this.state.cookie instanceof CookieMonster) ? this.state.cookies : new CookieMonster();
        // console.log(" c is ", c);
        // c.initCookie();
        console.log(" c is ", c);
    }

    componentWillUnmount() {
        
    }

    cookieStateUpdated(){
        console.log("COOKIE STATE IS::: ", this.state.cookie); 
    }

    updateRenderDrip(indx){
        console.log(indx);
        
        this.setState({
            oddDialogIndex: indx
        });
        this.isRenderDrip();
    }

    isRenderDrip(){
        console.log("index is ", this.state.oddDialogIndex);
        if (this.state.oddDialogIndex >= this.state.oddDialogLen){
                this.setState({
                    renderDrip: false
                });
            }
    }


    render() {

        if(this.state.renderDrip == false){
            return (
                <Story updateRenderDrip={this.updateRenderDrip} />
            )
        }
        return (
            <div>
                <Home />
            </div>
        )
    }
}

export default Root;