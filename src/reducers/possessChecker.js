import * as actionTypes from '../utils/actionTypes';
import weaponJson from '../data/weapon.json';
import partsJson from '../data/parts.json';

const initialAppState = {
    menuList: [
        { idx: 1, title: "武器", isSelected: true, list: weaponJson.map(p => { return { ...p, count: 0 }; }) },
        { idx: 2, title: "機体パーツ", isSelected: false, list: partsJson.map(p => { return { ...p, count: 0 }; }) }
    ],
}

const possessChecker = (state = initialAppState, action) => {
    switch (action.type) {
        case actionTypes.PARTS_CLICK:
            //表示中のメニューから一覧を取得
            const orgList = state.menuList.find(m => m.isSelected).list;
            
            //クリックされたパーツの特定
            const orgItem = orgList.find(p => p.idx === action.idx);
        
            return Object.assign({}, state,
                {
                menuList: state.menuList.map(m => {
                    return {
                        ...m,
                        list: !m.isSelected ?
                            m.list :
                            [...orgList.slice(0, action.idx),
                            Object.assign({}, orgItem, { count: orgItem.count === 4 ? 0 : orgItem.count + 1 }),
                            ...orgList.slice(action.idx + 1)]};
                    })
                }
            );
        case actionTypes.MENU_CLICK:
            return Object.assign({}, state,
                {
                    menuList: state.menuList.map(m => {
                        return { ...m, isSelected: m.idx === action.idx, };
                    })
                }
            );
            
        default:
            return state;
    }
};

export default possessChecker;
