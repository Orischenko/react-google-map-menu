import React from 'react';
import RectDOM from 'react-dom';
import { menuitems } from './data';
import Items from './components/Items';

RectDOM.render(
    <Items items={ menuitems }/>,
    document.getElementById('dropdown-menu')
);