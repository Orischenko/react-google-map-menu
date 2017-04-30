import React, { Component } from 'react';
import Item from './Item';
import Map from './Map';
import CSSTransition from 'react-addons-css-transition-group';

export default class Items extends Component{
    state = {
        isOpen: true,
        openItemId: 'restaurants',
        defaultData: {
            lat: 41.895370,
            lng: 12.473085,
            name: 'Da Pancrazio',
            address: 'Piazza del Biscione, 92, 00186 Roma, Italy',
            icon: ''
        }
    };

    render() {
        return(
            <div>
                { this.getLink() }
                <CSSTransition
                    transitionName="items-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    { this.getBody() }
                </CSSTransition>
                { this.getMap() }
            </div>
        );
    };

    getLink() {
        return(
            <button onClick={ this.toggleOpen } className={!this.state.isOpen ? null : "open"}>My Places</button>
        );
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        const { items } = this.props;

        if (!this.state.isOpen) return null;

        const itemElements = items.map((item) => {
            return(
                <li key={ item.id }>
                    <Item
                        item={ item }
                        onClick={ this.handleClick }
                        isOpenItem={ this.state.openItemId === item.id }
                        toggleOpen={ this.toggleItem(item.id) }
                        handleItemName={ this.state.defaultData.name }
                    />
                </li>
            );
        });

        return(
            <div className="items">
                <ul>
                    { itemElements }
                </ul>
            </div>
        );
    }

    toggleItem = (id) => (event) => {
        this.setState({
            openItemId: this.isItemOpen(id) ? null : id
        })
    };

    isItemOpen = (id) => {
        return(
            this.state.openItemId === id
        );
    };

    getMap() {
        return(
            <Map coordinate={this.state.defaultData} />
        );
    }

    handleClick = (data) => () => {
        this.setState({
            defaultData: {
                lat: Number(data.lat),
                lng: Number(data.lng),
                name: data.name,
                address: data.address,
                icon: data.icon
            }
        });
    }
}