import React, { Component } from 'react';

export default class Number extends Component{
    render() {
        const{ number, numberLenght } = this.props;

        return(
            <span>{ numberLenght }</span>
        );
    };
}