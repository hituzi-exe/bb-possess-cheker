import * as actionTypes from '../utils/actionTypes';

export const onPartsClick = (idx) => ({
    type: actionTypes.PARTS_CLICK,
    idx,
});

export const onMenuClick = (menuType) => ({
    type: actionTypes.MENU_CLICK,
    menuType,
});
