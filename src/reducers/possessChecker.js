import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    partsList: [
        {"idx": 0, "name": "M90", "count": 0 },
        {"idx": 1, "name": "M91", "count": 0 },
        {"idx": 2, "name": "M99", "count": 0 },
        {"idx": 3, "name": "M91", "count": 0 },
        {"idx": 4, "name": "M91", "count": 0 },
        {"idx": 5, "name": "M91", "count": 0 },
        {"idx": 6, "name": "M91", "count": 0 },
        {"idx": 7, "name": "M91", "count": 0 },
        {"idx": 8, "name": "M91", "count": 0 },
        {"idx": 9, "name": "M91", "count": 0 },
        {"idx": 10, "name": "M91", "count": 0 },
        {"idx": 11, "name": "M91", "count": 0 },
        {"idx": 12, "name": "M91", "count": 0 },
        {"idx": 13, "name": "M91", "count": 0 },
        {"idx": 14, "name": "M91", "count": 0 },
        {"idx": 15, "name": "M91", "count": 0 },
        {"idx": 16, "name": "M91", "count": 0 },
        {"idx": 17, "name": "M91", "count": 0 },
        {"idx": 18, "name": "M91", "count": 0 },
        {"idx": 19, "name": "M91", "count": 0 },
        {"idx": 20, "name": "M91", "count": 0 },
        {"idx": 21, "name": "M91", "count": 0 },
        {"idx": 22, "name": "M91", "count": 0 },
        {"idx": 23, "name": "M91", "count": 0 },
        {"idx": 24, "name": "M91", "count": 0 },
        {"idx": 25, "name": "M91", "count": 0 },
        {"idx": 26, "name": "M91", "count": 0 }
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
