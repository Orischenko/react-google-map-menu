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
        const { subitems, onClick } = this.props;

        if (!subitems) return null;

        const subitemElements = subitems.map((subitem) => {
            return(
                <SubItem key={ subitem.id } onClick={ onClick } subitem={ subitem } />
            );
        });

        return(
            <div>
                { subitemElements }
            </div>
        );
    }
}