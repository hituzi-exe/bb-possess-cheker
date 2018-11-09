import React from 'react'
import PropTypes from 'prop-types';

const PartsElm = ({ name, count, onClick }) => (
    <div onClick={onClick} className={"partsElm"}>
        <span>WEPON</span>
        <div>
            <img src="" alt="" /><span>MAIN</span>
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div><span>{name}</span></div>
        <div><span>{count}</span></div>
    </div>
);

PartsElm.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PartsElm;
