import React, { Component } from "react";
import ReactDOM from "react-dom";
import Style from "./home.scss";
import DripStyle from "../drip/story.scss";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import oddDialog from '../drip/story-narrative.js';
import ItemList from "./components/ItemList";
import ListStyle from "./components/list.scss";
import P5Wrapper from "../wrappers/P5Wrapper.js";
import External from "../home/external/External.js";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           home: 'HOME',
           narrLen: oddDialog.length,
           name: 'ODD TREATMENT',
           fadeClass: '',
        };
        this.addHeaderFade = this.addHeaderFade.bind(this);
    }

    componentDidMount() {
      console.log(this.state.home);
      window.setTimeout(this.addHeaderFade, 2000);
    }

    componentWillUnmount() {
        
    }

    

    addHeaderFade(){
        this.setState({
            fadeClass: 'fadeHeader',
            
        });
    }

    render() {
        return (
            <div className="home-container">
            
            <header>
                    <div className={'name-glitch narrative ' + this.state.fadeClass} data-text={this.state.name} style={{ opacity: this.state.opacity }}>
                    {this.state.name}
                </div>
                <External />
            </header>
                <div>
                    
                    <ItemList />
                </div>
            </div>
            
        );
    }
}

export default Home;