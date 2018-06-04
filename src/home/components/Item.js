import React, { Component } from "react";
import ReactDOM from "react-dom";
import Style from "./item.scss";
import Glitch from "../../drip/story.scss";



class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fuzzClass: '',
            isFuzzing: false,
        };
        this.setDelay = this.setDelay.bind(this);
        this.changeClassName = this.changeClassName.bind(this);
        this.changeIsFuzzing = this.changeIsFuzzing.bind(this);
        this.staggerSetClass = this.staggerSetClass.bind(this);
    }

    componentDidMount(){
        console.log("in Item ", this.props.data);
        // this.changeClassName();
        window.setTimeout(this.staggerSetClass, 7000);

    }

    staggerSetClass(){
        window.setTimeout(this.changeClassName, this.setDelay());
    }

    setDelay(){
        let max = 7;
        let duration = Math.floor(Math.random() * Math.floor(max)) * 1000;
        console.log(duration);
        return duration;
    }

    changeClassName(){
        this.setState({
            fuzzClass: this.state.isFuzzing ? '' : 'fuzzOut'
        });
        // this.changeIsFuzzing();
    }

    changeIsFuzzing(){
        this.setState({
            isFuzzing: !this.state.isFuzzing
        });
    }

    render(){
        return (
            <div className="item-container">
                <div className={'item-name ' + this.state.fuzzClass}>{this.props.data.name}</div>
                <img className="item-img" src={this.props.data.img} />
            </div>
        )
    }
    
}

function openInTab(url){
    let win = window.open(url, '_blank');
    win.focus();
}

export default Item;