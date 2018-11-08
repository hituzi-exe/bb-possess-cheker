import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    name: "M90",
    resultValue: 0,
}

const possessChecker = (state = initialAppState, action) => {
    if (action.type === actionTypes.PARTS_CLICK) {
        return {
            name:"M91",
            resultValue: state.resultValue + 1,
        };
    }
    
    console.info(action.type);
    return state;
};

export default possessChecker;
