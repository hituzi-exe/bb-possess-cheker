import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    partsList: [
        {"idx": 0, "name": "M90" },
        {"idx": 1, "name": "M91" }
    ],
    possessList: [
        {"idx": 0, "name": "M90", "count": 0 },
        {"idx": 1, "name": "M91", "count": 0 }
    ]
}

const possessChecker = (state = initialAppState, action) => {
    if (action.type === actionTypes.PARTS_CLICK) {
        const orgItem = state.possessList.find(p => p.idx === action.idx);

        return Object.assign({}, state, {
            possessList: [
                ...state.possessList.slice(0, action.idx),
                Object.assign({}, orgItem, {count: orgItem.count + 1}),
                ...state.possessList.slice(action.idx + 1)
               ]
        });
        
    }
    
    return state;
};

export default possessChecker;
