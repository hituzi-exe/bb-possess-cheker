import React from 'react';
import * as menuTypes from '../utils/menuTypes';
import { encodeParam } from '../utils/UrlParamEncoder';

import { Link } from 'react-router-dom';

const PossessURL = ({ menuList }) => {
    const partsItems = menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;

    const paramString = encodeParam(partsItems, weaponItems);

    return (
        <div className={'PossessURL'}>
            <span>{`/PossessChecker?param=${paramString}`}</span>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/PossessChecker?param=${paramString}`}>PossessChecker</Link></li>
                <li><Link to={`/AssemblyAdjuster?param=${paramString}`}>AAA</Link></li>
            </ul>
        </div>
    )
};

export default PossessURL;
