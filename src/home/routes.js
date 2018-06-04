import React from 'react';
import { Redirect } from 'react-router';
// import { FlowerDoom, Oogles, Neon, Fatty, Dirge} from '../index.js';
import Fatty from '/Users/erikkimsey/Desktop/OT2/src/home/components/fatty/Fatty.js';
import FlowerDoom from '/Users/erikkimsey/Desktop/OT2/src/home/components/flowerdoom/FlowerDoom.js';
import Neon from '/Users/erikkimsey/Desktop/OT2/src/home/components/neon/Neon.js';
import Oogles from '/Users/erikkimsey/Desktop/OT2/src/home/components/oogles/Oogles.js';
import Dirge from '/Users/erikkimsey/Desktop/OT2/src/home/components/dirge/Dirge.js';
import ItemList from '/Users/erikkimsey/Desktop/OT2/src/home/components/ItemList.js';
import Item from '/Users/erikkimsey/Desktop/OT2/src/home/components/Item.js';
console.log(FlowerDoom);

const SKETCHES = [
    {
        name: 'The Eye',
        key: 'flowerdooms',
        path: '/flowerdoom',
        img: '',
        component: FlowerDoom,
    },
    {
        name: 'Ooogles',
        key: 'oogles',
        path: '/oogles',
        img: '',
        component: Oogles
    },
    {
        name: 'Neon',
        key: 'neon',
        path: '/neon',
        img: '',
        component: Neon
    },
    {
        name: 'Fatty',
        key: 'fatty',
        path: '/fatty',
        img: '',
        component: Fatty,
    },
    {
        name: 'Dirge',
        key: 'dirge',
        path: '/dirge',
        img: '',
        component: Dirge,
    }
];

export default SKETCHES;