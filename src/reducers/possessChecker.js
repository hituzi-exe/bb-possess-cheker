import * as actionTypes from '../utils/actionTypes';
import * as menuTypes from '../utils/menuTypes';

import { decodeParam } from '../utils/UrlParamDecoder';

import weaponJson from '../data/weapon.json';
import partsJson from '../data/parts.json';

const initialAppState = {
    menuList: [
        { menuType: menuTypes.MENU_WEAPON, title: "武器", isSelected: true, items: weaponJson.map(p => { return { ...p, count: 0 }; }) },
        { menuType: menuTypes.MENU_PARTS, title: "機体パーツ", isSelected: false, items: partsJson.map(p => { return { ...p, count: 0 }; }) }
    ],
}

export const setParam = (param) => {
    if (param === null) {
        return { type: actionTypes.SET_URL_PARAM, menuList: null, };
    }

    const setState = initialAppState;

    const { weaponArray, partsArray} = decodeParam(param);
    const partsItems = setState.menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = setState.menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;
    for (let parts of partsItems) {
        parts.count = partsArray.find(p => p.idx === parts.idx).count;
    }
    for (let parts of weaponItems) {
        parts.count = weaponArray.find(p => p.idx === parts.idx).count;
    }

    return {
        type: actionTypes.SET_URL_PARAM,
        menuList: setState,
    };
}
  
const possessChecker = (state = initialAppState, action) => {
    switch (action.type) {
        case actionTypes.SET_URL_PARAM:
            return { ...state, menuList: action.menulist, }

        case actionTypes.PARTS_CLICK:
            //表示中のメニューから一覧を取得
            const orgList = state.menuList.find(m => m.isSelected).items;
        
            //クリックされたパーツの特定
            const orgItem = orgList.find(p => p.idx === action.idx);
            
            //クリックされたパーツのカウントを進める
            const addedList =
                [...orgList.slice(0, action.idx),
                Object.assign({}, orgItem, { count: orgItem.count === 4 ? 0 : orgItem.count + 1 }),
                ...orgList.slice(action.idx + 1)]
        
            return Object.assign({}, state,
                {
                    menuList: state.menuList.map(m => {
                        return { ...m, items: !m.isSelected ? m.items : addedList };
                    })
                },
            );
        case actionTypes.MENU_CLICK:
            return Object.assign({}, state,
                {
                    menuList: state.menuList.map(m => {
                        return { ...m, isSelected: m.menuType === action.menuType, };
                    })
                }
            );
            
        default:
            return state;
    }
};

export default possessChecker;
