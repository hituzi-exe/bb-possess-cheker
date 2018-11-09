import React from 'react'
import PropTypes from 'prop-types';

const PartsElm = ({ parts, onClick }) => {
    const className = "partsElm partsElm__count_" + parts.count;

    return (
        <div onClick={onClick} className={className}>
            <span>WEAPON</span>
            <PartsCategory parts={parts} />
            <PartsImage parts={parts} />
            <PartsName parts={parts} />
            <div><span>{parts.count}</span></div>
        </div>
    )
};

const PartsCategory = ({ parts }) => (
    <div><img src="" alt="" /><span>{parts.category}</span></div>
);

const PartsImage = ({ parts }) => (
    <div><img src={parts.imgSrc} alt="" /></div>
);

const PartsName = ({ parts }) => (
    <div><span>{parts.name}</span></div>
);

PartsElm.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PartsElm;
