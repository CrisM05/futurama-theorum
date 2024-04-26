import React from 'react';

const Brain = ({originalName, changedName}) => {
    return (
        <div className=" center">
            <ul className="brain flex center">
                <li>{originalName}</li>
                {changedName && <li>changedName</li>}
            </ul>
        </div>
    );
}

export default Brain;
