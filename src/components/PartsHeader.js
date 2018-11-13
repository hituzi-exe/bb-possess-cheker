import React from 'react'

const PartsHeader = ({title, partsList }) => {
    const possessCount = partsList.filter(p => p.count > 0).length;

    return (
        <div className={"partsHeader"}>
            <div>
                <span>{title}</span>
                <span className="partsHeader__counter">({possessCount + "/" + partsList.length})</span>
            </div>
        </div>
    )
};

export default PartsHeader;

