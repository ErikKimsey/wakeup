

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Style from "./list.scss";
import Item from "./Item.js";
import Fatty from '/Users/erikkimsey/Desktop/OT2/src/home/components/fatty/Fatty.js';
import FlowerDoom from '/Users/erikkimsey/Desktop/OT2/src/home/components/flowerdoom/FlowerDoom.js';
import Neon from '/Users/erikkimsey/Desktop/OT2/src/home/components/neon/Neon.js';
import Oogles from '/Users/erikkimsey/Desktop/OT2/src/home/components/oogles/Oogles.js';
import Dirge from '/Users/erikkimsey/Desktop/OT2/src/home/components/dirge/Dirge.js';
import routes from '/Users/erikkimsey/Desktop/OT2/src/home/routes.js';
import Home from '../Home.js';


class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
        console.log("Item::: ", Item);
        const links = routes.map((route) => {
            return route.component;
        });
        console.log(links);
    }


    render(){

       return (
           <div className="block-container">
            <div className="list-container">
                <nav class="nav">
                    <Link key={routes[0].key} to={routes[0].path}>
                        <Item data={routes[0]} key={routes[0].key} />
                    </Link>
                    <Link key={routes[1].key} to={routes[1].path}>
                        <Item data={routes[1]} />
                    </Link>
                    <Link key={routes[2].key} to={routes[2].path}>
                        <Item data={routes[2]} />
                    </Link>
                    <Link key={routes[3].key} to={routes[3].path}>
                        <Item data={routes[3]} />
                    </Link>
                    <Link key={routes[4].key} to={routes[4].path}>
                        <Item data={routes[4]} />
                    </Link>
                </nav>
            </div>
               <Route exact path="/" component={FlowerDoom} />
               {
                   routes.map((route) => {
                       return <Route path={route.path} component={route.component} />
                   })
               }

           </div>
       )
    }
}

export default ItemList;