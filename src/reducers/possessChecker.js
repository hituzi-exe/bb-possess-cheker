import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    name: "M90",
    resultValue: 0,
}

const possessChecker = (state = initialAppState, action) => {
    if (action.type === actionTypes.PARTS_CLICK) {
        return {
            ...state,
            resultValue: state.resultValue + 1,
        };
    }
    
    return state;
};

export default possessChecker;
