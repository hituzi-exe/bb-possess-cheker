//import { decodeParam } from '../utils/UrlParamDecoder';
import * as actionTypes from '../utils/actionTypes';

const initialAppState = { 
    menuList: [],
}

const assemblyAdjuster = (state = initialAppState, action) => {
    switch (action.type) {
        case actionTypes.PARTS_CLICK:
            return state;
        
        case actionTypes.MENU_CLICK:
            return state;
        
        default:
            return state;
    }
};

export default assemblyAdjuster;
