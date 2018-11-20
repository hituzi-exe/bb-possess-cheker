import React from 'react'
import PropTypes from 'prop-types';

import assault from '../images/assault.png';
import heavy from '../images/heavy.png';
import guerrilla from '../images/guerrilla.png';
import support from '../images/support.png';

const PartsElm = ({ parts, onClick }) => {
    return (
        <div onClick={onClick} className={`partsElm partsElm__count_${parts.count}`}>
            <PartsDivision parts={parts} />
            <PartsCategory parts={parts} />
            <PartsImage parts={parts} />
            <PartsName parts={parts} />
            <PartsProgress parts={parts} />
        </div>
    )
};

const PartsDivision = ({ parts }) => (
    <div className='partsElm__division'><span>{parts.division}</span></div>
)

const readImg = armament => {
    switch (armament) {
        case 'assault':
            return assault;
        case 'heavy':
            return heavy;
        case 'guerrilla':
            return guerrilla;
        case 'support':
            return support;
        default:
            return '';
    }
};

const PartsCategory = ({ parts }) => (
    <div className='partsElm__category'>
        <img src={readImg(parts.armament)} alt='' /><span>{parts.category}</span>
    </div>
);

const PartsImage = ({ parts }) => (
    <div><img src={parts.imgSrc} alt='' /></div>
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
