import React, { Component } from 'react';
import SubItems from './Subitems';

export default class Page extends Component{
    state = {
        isOpen: false
    };

    render() {
        const{ item } = this.props;

        return(
            <div>
                <h5 onClick={ this.toggleOpen } className={!this.state.isOpen ? null : "open"}>{ item.name }</h5>

                { this.getSubItems() }
            </div>
        );
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getSubItems() {
        if(!this.state.isOpen) return null;

        return(
            <SubItems subitems={ this.props.item.subitems } onClick={ this.props.onClick }/>
        );
    }
}