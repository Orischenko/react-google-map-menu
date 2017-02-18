import React, { Component } from 'react';
import SubItem from './Subitem';

export default class SubItems extends Component{
    render() {
        return(
            <div className="subitems">
                { this.getSubItems() }
            </div>
        );
    };

    getSubItems() {
        const{ subitems, onClick } = this.props;

        if(!subitems) return null;

        const subitemElements = subitems.map((subitem) => {
            return(
                <li key={ subitem.age } onClick={ onClick(subitem) }><SubItem subitem={ subitem } /></li> //send props up
            );
        });

        return(
            <ul>
                { subitemElements }
            </ul>
        );
    }
}