import React, { Component } from 'react';

export default class SubItem extends Component {
    render() {
        const { subitem, onClick, handleItemName } = this.props;

        return (
            <div className={ handleItemName === subitem.name ? 'subitem active' : 'subitem' } onClick={ onClick(subitem) }>
                <span data-icon={ subitem.icon } className="icon"></span>
                <div>
                    <p>{ subitem.name }</p>
                </div>
            </div>
        );
    }
}