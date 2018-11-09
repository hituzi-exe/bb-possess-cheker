import * as actionTypes from '../utils/actionTypes';
import partsJson from '../data/weapon.json';

const initialAppState = {
    partsList: partsJson
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

        default:
            return state;
    }
};

export default possessChecker;
