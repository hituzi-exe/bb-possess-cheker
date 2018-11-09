import React from 'react'
import PropTypes from 'prop-types';

const PartsElm = ({ parts, onClick }) => (
    <div onClick={onClick} className={"partsElm"}>
        <span>WEAPON</span>
        <div>
            <img src="" alt="" /><span>MAIN</span>
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div><span>{parts.name}</span></div>
        <div><span>{parts.count}</span></div>
    </div>
);

PartsElm.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PartsElm;
