import React, { Component } from 'react';
import Number from './Number';

export default class SubItem extends Component{
    render() {
        const{ subitem } = this.props;

        return(
            <div className="subitem">
                <span data-icon={ subitem.icon } className="icon"></span>
                <div>
                    <p>{ subitem.name }</p>
                    <Number number={ subitem.numbers } numberLenght={ subitem.numbers.length }/>
                </div>
            </div>
        );
    };
}