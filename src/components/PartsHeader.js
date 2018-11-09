import React from 'react'

const PartsHeader = ({ partsList }) => {
    const possessCount = partsList.filter(p => p.count > 0).length;

    return (
        <div className={"partsHeader"}>
            <div>
                <span>武器</span>
                <span>{possessCount + "/" + partsList.length}</span>
            </div>
        </div>
    )
};

export default PartsHeader;

