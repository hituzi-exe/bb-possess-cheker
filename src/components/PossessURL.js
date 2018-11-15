import React from 'react'
import { encodeParam } from '../utils/UrlParamEncoder';

import { Link } from 'react-router-dom'

const PossessURL = ({ menuList }) => {
    return (        
        <div className={"PossessURL"}>
            <span>{encodeParam(menuList)}</span>
            <Link
              to={encodeParam(menuList)}
            >aaa
            </Link>
        </div>
    )
};

export default PossessURL;
