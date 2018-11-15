import React from 'react'
import { encodeParam } from '../utils/UrlParamEncoder';
import { decodeParam } from '../utils/UrlParamDecoder';

import { Link } from 'react-router-dom'

const PossessURL = ({ menuList }) => {
    const pramString = encodeParam(menuList);

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
