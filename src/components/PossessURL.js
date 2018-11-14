import React from 'react'
import * as menuTypes from '../utils/menuTypes';
import { paramEncode } from '../utils/UrlParamEncoder';

import { Link } from 'react-router-dom'

const PossessURL = ({ menuList }) => {
    return (        
        <div className={"PossessURL"}>
            <span>{paramEncode(menuList)}</span>
            <Link
              to={paramEncode(menuList)}
            >aaa
            </Link>
        </div>
    )
};

export default PossessURL;
