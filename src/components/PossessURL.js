import React from 'react'
import { encodeParam, decodeParam } from '../utils/UrlParamEncoder';

import { Link } from 'react-router-dom'

const PossessURL = ({ menuList }) => {
    return (        
        <div className={"PossessURL"}>
            <span>{encodeParam(menuList)}</span>
            <Link
              to={encodeParam(menuList)}
            >aaa
            </Link>
            <span>{decodeParam(encodeParam(menuList))}</span>
        </div>
    )
};

export default PossessURL;
