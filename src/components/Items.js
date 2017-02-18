import React, { Component } from 'react';
import Item from './Item';
import Map from './Map';

export default class Items extends Component{
    state = {
        isOpen: false,
        defaultCoord: {
            lat: 41.904700,
            lng: 12.494367,
            name: 'Rome, Italy',
            address: ''
        }
    };

    render() {
        return(
            <div>
                { this.getLink() }
                { this.getBody() }
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
        const{ items } = this.props;

        if(!this.state.isOpen) return null;

        const itemElements = items.map((item) => {
            return(
                <li key={ item.age }>
                    <Item
                        item={ item }
                        onClick={ this.handleClick }
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

    getMap() {
        return(
            <Map coordinate={this.state.defaultCoord} />
        );
    }

    handleClick = (coord) => () => {
        this.setState({
            defaultCoord: {
                lat: Number(coord.lat),
                lng: Number(coord.lng),
                name: coord.name,
                address: coord.address
            }
        });
    }
}