import React from 'react'
import * as menuTypes from '../utils/menuTypes';
import { encodeParam } from '../utils/UrlParamEncoder';
import { decodeParam } from '../utils/UrlParamDecoder';

import { Link } from 'react-router-dom'

const PossessURL = ({ menuList }) => {
    const partsItems = menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;

    const pramString = encodeParam(partsItems, weaponItems);

    return (        
        <div className={"PossessURL"}>
            <span>{pramString}</span>
            <Link
              to={pramString}
            >aaa
            </Link>
            <span>{decodeParam(pramString).partsArray.map(m=>m.count).toString()}</span>
        </div>
    )
};

export default PossessURL;
