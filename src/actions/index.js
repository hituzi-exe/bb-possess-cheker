import * as actionType from '../utils/actionTypes';

export const onNumClick = (number) => ({
    type: actionType.INPUT_NUMBER,
    number
});
export const onPlusClick = () => ({
    type: actionType.PLUS,
});
export const onPartsClick = (idx) => ({
    type: actionType.PARTS_CLICK,
    idx,
});