import * as actionTypes from '../utils/actionTypes';
import weaponJson from '../data/weapon.json';
import partsJson from '../data/parts.json';

const initialAppState = {
    partsList: weaponJson.map(p => Object.assign({}, p, { count: 0 })),
    menuList: [
        {"idx":1, "title": "武器", "isSelected": true, "list": weaponJson},
        {"idx":2, "title": "機体パーツ", "isSelected": false, "list": partsJson}],
    
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
            return Object.assign({},
                state,
                {
                menuList: state.menuList.map(menu => {
                    return {
                        "idx": menu.idx,
                        "title": menu.title,
                        "isSelected": menu.idx === action.idx,
                        "list": menu.list
                    };
                    })
                },
                {
                    partsList: state.menuList
                        .find(menu => menu.idx === action.idx)
                        .list.map(p => Object.assign({}, p, { count: 0 }))
                }
            );
            
        default:
            return state;
    }
};

export default possessChecker;
