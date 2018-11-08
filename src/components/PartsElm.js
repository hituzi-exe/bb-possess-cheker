import React from 'react'
import PropTypes from 'prop-types';

const PartsElm = ({ name, result, onClick }) => (
    <div onClick={onClick}>
        <span>WEPON</span>
        <div>
            <img src="" alt="" /><span>MAIN</span>
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div><span>{name}</span></div>
        <div><span>{result}</span></div>
    </div>
);

PartsElm.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PartsElm;
