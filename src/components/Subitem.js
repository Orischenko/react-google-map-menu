import React from 'react';

export default function SubItem({subitem, onClick}) {
    return(
        <div className="subitem" onClick={ onClick(subitem) }>
            <span data-icon={ subitem.icon } className="icon"></span>
            <div>
                <p>{ subitem.name }</p>
            </div>
        </div>
    );
}