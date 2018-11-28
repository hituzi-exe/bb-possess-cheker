import React from 'react';
import * as menuTypes from '../utils/menuTypes';
import { encodeParam } from '../utils/UrlParamEncoder';

import { Link } from 'react-router-dom';

const PossessURL = ({ menuList }) => {
    const partsItems = menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;

    const paramString = encodeParam(partsItems, weaponItems);

    return (
        <div className='Footer'>
            <div className='Footer__counter'>
                <div className='Footer__start'>
                    <ul className='Footer__links'>
                        <li className='Footer__link'><Link to={`/`}>Home</Link></li>
                        <li className='Footer__link'><Link to={`/PossessChecker?param=${paramString}`}>PossessChecker</Link></li>
                        <li className='Footer__link'><Link to={`/AssemblyAdjuster`}>AAA</Link></li>
                    </ul>
                </div>
                <div className='Footer__end'></div>
            </div>
        </div>
    )
};

export default PossessURL;
