import { combineReducers } from 'redux';

import status from './status';
import filter from './filter';
import results from './results';

const searchApp = combineReducers({
    status,
    filter,
    results,
});

export default searchApp;
