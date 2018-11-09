import * as actionType from '../utils/actionTypes';

export const onPartsClick = (idx) => ({
    type: actionType.PARTS_CLICK,
    idx,
});