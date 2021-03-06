import React, { Component } from 'react';
import SubItems from './Subitems';

export default class Page extends Component{
    render() {
        const { item, toggleOpen, isOpenItem } = this.props;

        return(
            <div>
                    <h5 onClick={ toggleOpen } className={!isOpenItem ? null : "open"}>{ item.name }</h5>
                { this.getSubItems() }
            </div>
        );
    };

    getSubItems() {
        if(!this.props.isOpenItem) return null;

        return(
            <SubItems
                subitems={ this.props.item.subitems }
                onClick={ this.props.onClick }
                handleItemName={ this.props.handleItemName }
            />
        );
    }
}