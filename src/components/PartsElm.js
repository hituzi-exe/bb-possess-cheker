import React from 'react'
import PropTypes from 'prop-types';

import assault from '../images/assault.png';
import heavy from '../images/heavy.png';
import guerrilla from '../images/guerrilla.png';
import support from '../images/support.png';

const PartsElm = ({ parts, onClick }) => {
    const className = "partsElm partsElm__count_" + parts.count;

    return (
        <div onClick={onClick} className={className}>
            <PartsDivision parts={parts} />
            <PartsCategory parts={parts} />
            <PartsImage parts={parts} />
            <PartsName parts={parts} />
            <PartsProgress parts={parts} />
        </div>
    )
};

const PartsDivision = ({ parts }) => (
    <div className="partsElm__division"><span>{parts.division}</span></div>
)

//TODO 兵装アイコン読込に変更すること
const PartsCategory = ({ parts }) => {
    const imgSrc = category => {
        switch (category) {
            case "assault":
                return assault;
            case "heavy":
                return heavy;
            case "guerrilla":
                return guerrilla;
            case "support":
                return support;
            default:
                return "";
        }
    };

    return (
        <div><img src={imgSrc(parts.armament)} alt="" /><span>{parts.category}</span></div>
    )
};

const PartsImage = ({ parts }) => (
    <div><img src={parts.imgSrc} alt="" /></div>
);

const PartsName = ({ parts }) => (
    <div><span>{parts.name}</span></div>
);

//TODO おそらくバッドプラクティス
//parts.countとcssのclass名が依存してる。
const PartsProgress = ({ parts }) => (
    <div className={`partsElm__progress partsElm__progress_count_${parts.count}`}></div>
);

PartsElm.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PartsElm;
