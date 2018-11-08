import { combineReducers } from 'redux';
import calculator from './calculator';
import possessChecker from './possessChecker';

const reducer = combineReducers({
    calculator,
    possessChecker,
});

export default reducer;
