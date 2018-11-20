import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import possessChecker from './possessChecker';

const reducer = (history) => combineReducers({
    router: connectRouter(history),
    possessChecker: possessChecker,
});

export default reducer;
