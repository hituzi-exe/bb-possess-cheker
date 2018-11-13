import * as actionType from '../utils/actionTypes';

export const onPartsClick = (idx) => ({
    type: actionType.PARTS_CLICK,
    idx,
});

export const onMenuClick = (menuType) => ({
    type: actionType.MENU_CLICK,
    menuType,
});
