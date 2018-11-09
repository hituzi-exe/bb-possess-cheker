import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    partsList: [
        {"idx": 0, "name": "M90", "count": 0 },
        {"idx": 1, "name": "M91", "count": 0 }
    ]
}

const possessChecker = (state = initialAppState, action) => {
    if (action.type === actionTypes.PARTS_CLICK) {
        const orgItem = state.partsList.find(p => p.idx === action.idx);

        return Object.assign({}, state, {
            partsList: [
                ...state.partsList.slice(0, action.idx),
                Object.assign({}, orgItem, { count: orgItem.count === 4 ? 0 : orgItem.count + 1 }),
                ...state.partsList.slice(action.idx + 1)
               ]
        });
    }
    
    return state;
};

export default possessChecker;
