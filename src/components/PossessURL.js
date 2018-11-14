import React from 'react'
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
