import React from 'react'
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

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

//TODO 兵装アイコン読込に変更すること
const PartsCategory = ({ parts }) => {
    const imgSrc = category => {
        switch (category) {
            case "MAIN":
                return logo;
            case 1:
                return logo;
            case 2:
                return "";
            case 3:
                return "";
            default:
                return "";
        }
    };

    return (
        <div><img src={imgSrc(parts.category)} alt="" /><span>{parts.category}</span></div>
    )
};

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
