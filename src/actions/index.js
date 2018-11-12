import * as actionType from '../utils/actionTypes';

export const onPartsClick = (idx) => ({
    type: actionType.PARTS_CLICK,
    idx,
});

export const onMenuPartsClick = (idx) => ({
    type: actionType.MENU_PARTS_CLICK,
    idx,
});

export const onMenuWeaponClick = (idx) => ({
    type: actionType.MENU_WEAPON_CLICK,
    idx,
});