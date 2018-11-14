import React from 'react';
import PartsElm from './PartsElm';

const PartsContainer = ({ partsList, actions }) => {
    return (
        <div className={"partsContainer"}>
            {partsList.map(parts => { 
                return <PartsElm
                    key={parts.idx}
                    parts={parts}
                    onClick={() => actions.onPartsClick(parts.idx)} />
            })}
        </div>
    )
};


export default PartsContainer;

