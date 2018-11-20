import React from 'react';
import * as menuTypes from '../utils/menuTypes';
import { encodeParam } from '../utils/UrlParamEncoder';

import { Link } from 'react-router-dom';

const PossessURL = ({ menuList }) => {
    const partsItems = menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;

    const pramString = encodeParam(partsItems, weaponItems);

    return (        
        <div className={'PossessURL'}>
            <span>{`/?param=${pramString}`}</span>
            <Link to={`/PossessChecker?param=${pramString}`}>Possess</Link>
            <Link to={`/AssemblyAdjuster?param=${pramString}`}>AAA</Link>
        </div>
    )
};

export default PossessURL;
