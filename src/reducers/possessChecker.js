import * as actionTypes from '../utils/actionTypes';
import partsJson from '../data/weapon.json';

const initialAppState = {
    partsList: partsJson.map(p => Object.assign({}, p, { count: 0 })),
    menuList: [{ "title": "武器", "isSelected": true }, { "title": "機体パーツ", "isSelected": false }],
}

const possessChecker = (state = initialAppState, action) => {
    switch (action.type) { 
        case actionTypes.PARTS_CLICK:
            const orgItem = state.partsList.find(p => p.idx === action.idx);

            return Object.assign({}, state, {
                partsList: [
                    ...state.partsList.slice(0, action.idx),
                    Object.assign({}, orgItem, { count: orgItem.count === 4 ? 0 : orgItem.count + 1 }),
                    ...state.partsList.slice(action.idx + 1)
                ]
            });

        case actionTypes.MENU_CLICK:
            return state;
        default:
            return state;
    }
};

export default possessChecker;
